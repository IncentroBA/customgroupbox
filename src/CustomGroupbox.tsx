import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, View, TouchableOpacity } from "react-native";
import { DynamicValue, NativeIcon, ValueStatus } from "mendix";
import { Icon } from 'mendix/components/native/Icon';

import { Style, mergeNativeStyles } from '@mendix/pluggable-widgets-tools';

import { CustomGroupboxProps } from '../typings/CustomGroupboxProps';

export interface CustomStyle extends Style {
  headerContainer: ViewStyle;
  label: TextStyle;
  innerContainer: ViewStyle;
  selectedContainer: ViewStyle;
  divider: ViewStyle;
  icon: ViewStyle;
  groupboxParent: ViewStyle
}

const defaultStyle: CustomStyle = {
  headerContainer: {},
  label: {},
  innerContainer: {},
  selectedContainer: {},
  divider: {
    backgroundColor: '#A2A2A2',
    height: 1,
  },
  icon: {
    alignSelf: 'flex-end'
  },
  groupboxParent: {}
};

interface State {
  showContent: boolean;
}

const defaultCollapseIconGlyph = "glyphicon-minus";
const defaultExpandIconGlyph = "glyphicon-plus";

export class CustomGroupbox extends Component<CustomGroupboxProps<CustomStyle>, State> {
  constructor(props: CustomGroupboxProps<CustomStyle>){
    super(props)
    this.toggleContent = this.toggleContent.bind(this)
    this.state = { showContent: false, }
  }

  private readonly styles = mergeNativeStyles(defaultStyle, this.props.style);
    
  render(): ReactNode {
    const icons = {
      collapseIcon: this.renderIcon(defaultCollapseIconGlyph, this.props.collapseIcon),
      expandIcon: this.renderIcon(defaultExpandIconGlyph, this.props.expandIcon),
    };
      
    return (
      <View style={this.styles.groupboxParent}>
        <TouchableOpacity onPress={this.toggleContent}>
          <View style={this.styles.headerContainer}>
          <View>{this.props.header}</View>
            <View style={this.styles.icon}>{this.state.showContent ? icons.collapseIcon : icons.expandIcon}</View>
          </View>
        </TouchableOpacity>

      <View style={this.state.showContent ? this.styles.selectedContainer : null}>
        {this.state.showContent && <View style={this.styles.innerContainer}>{this.props.content}</View>}
        {this.props.showDivider && <View style={this.styles.divider}></View>}
      </View>
      </View>
      
    );
  }

  toggleContent() {
    this.setState({ showContent: !this.state.showContent })
  }

  private renderIcon = (glyph: string, toBeRenderedIcon?: DynamicValue<NativeIcon>) => {
    const nativeIcon: NativeIcon =
      toBeRenderedIcon && toBeRenderedIcon.status === ValueStatus.Available
        ? toBeRenderedIcon.value
        : { type: "glyph", iconClass: glyph };

    return <Icon icon={nativeIcon} />;
  };
}