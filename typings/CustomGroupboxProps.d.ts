/**
 * This file was generated from CustomGroupbox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, ReactNode } from "react";
import { DynamicValue, NativeIcon } from "mendix";

export interface CustomGroupboxProps<Style> {
    name: string;
    style: Style[];
    header: ReactNode;
    content?: ReactNode;
    showDivider: boolean;
    expandIcon?: DynamicValue<NativeIcon>;
    collapseIcon?: DynamicValue<NativeIcon>;
    startCollapsed: boolean;
}

export interface CustomGroupboxPreviewProps {
    class: string;
    style: string;
    header: { widgetCount: number; renderer: ComponentType };
    content: { widgetCount: number; renderer: ComponentType };
    showDivider: boolean;
    expandIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    collapseIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    startCollapsed: boolean;
}
