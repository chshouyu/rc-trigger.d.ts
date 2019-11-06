/// <reference types="react" />

declare module 'rc-trigger' {
  import * as React from 'react';

  export type TriggerActions = 'click' | 'hover' | 'focus' | 'contextMenu';

  export type TriggerPopupAlignPoints =
    | 'tl'
    | 'tr'
    | 'tc'
    | 'cl'
    | 'cc'
    | 'cr'
    | 'bl'
    | 'bc'
    | 'br';

  export interface TriggerPopupAlignConfig {
    /**
     * move point of source node to align with point of target node,
     * such as ['tr','cc'], align top right point of source node with center point of target node.
     * point can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right)
     */
    points?: [TriggerPopupAlignPoints, TriggerPopupAlignPoints];
    /**
     * offset source node by offset[0] in x and offset[1] in y.
     * If offset contains percentage string value, it is relative to sourceNode region.
     */
    offset?: [string | number, string | number];
    /**
     * offset target node by offset[0] in x and offset[1] in y.
     * If targetOffset contains percentage string value, it is relative to targetNode region.
     */
    targetOffset?: [string | number, string | number];
    /**
     * if adjustX field is true, then will adjust source node in x direction if source node is invisible.
     * if adjustY field is true, then will adjust source node in y direction if source node is invisible.
     */
    overflow?: { adjustX?: boolean; adjustY?: boolean };
    /**
     * whether use css right instead of left to position
     */
    useCssRight?: boolean;
    /**
     * whether use css bottom instead of top to position
     */
    useCssBottom?: boolean;
    /**
     * whether use css transform instead of left/top/right/bottom to position if browser supports.
     * Defaults to false.
     */
    useCssTransform?: boolean;
  }

  export interface TriggerProps {
    popup: React.ReactElement | (() => React.ReactElement);
    /**
     * which actions cause popup shown. enum of 'hover','click','focus','contextMenu'
     * default: ['hover']
     */
    action?: TriggerActions[];
    /**
     * popup 's align config
     */
    popupAlign?: TriggerPopupAlignConfig;
    /**
     * whether popup is visible
     */
    popupVisible?: boolean;
    /**
     * whether popup is visible initially
     */
    defaultPopupVisible?: boolean;
    /**
     * Popup will align with mouse position (support action of 'click', 'hover' and 'contextMenu')
     * default: false
     */
    alignPoint?: boolean;
    /**
     * additional className added to popup
     */
    popupClassName?: string;
    /**
     * whether render popup before first show
     * default: false
     */
    forceRender?: boolean;
    /**
     * whether destroy popup when hide
     * default: false
     */
    destroyPopupOnHide?: boolean;
    /**
     * delay time to show when mouse enter. unit: s.
     * default: 0
     */
    mouseEnterDelay?: number;
    /**
     * delay time to hide when mouse leave. unit: s.
     * default: 0.1
     */
    mouseLeaveDelay?: number;
    /**
     * additional style of popup
     */
    popupStyle?: React.CSSProperties;
    /**
     * prefix class name
     * default: 'rc-trigger-popup'
     */
    prefixCls?: string;
    /**
     * https://github.com/react-component/animate
     */
    popupTransitionName?: string | object;
    /**
     * https://github.com/react-component/animate
     */
    maskTransitionName?: string | object;
    /**
     * whether to support mask
     * default: false
     */
    mask?: boolean;
    /**
     * whether to support click mask to hide
     * default: true
     */
    maskClosable?: boolean;
    /**
     * popup's zIndex
     */
    zIndex?: number;
    /**
     * use preset popup align config from builtinPlacements, can be merged by popupAlign prop
     */
    popupPlacement?: string;
    /**
     * builtin placement align map. used by placement prop
     */
    builtinPlacements?: object;
    /**
     * Let popup div stretch with trigger element.
     * enums of 'width', 'minWidth', 'height', 'minHeight'.
     * (You can also mixed with 'height minWidth')
     */
    stretch?:
      | 'width'
      | 'minWidth'
      | 'height'
      | 'minHeight'
      | 'width height'
      | 'width minHeight'
      | 'minWidth height'
      | 'minWidth minHeight';
    /**
     * additional className added to popup according to align
     */
    getPopupClassNameFromAlign?: (align: TriggerPopupAlignConfig) => string;
    /**
     * call when popup visible is changed
     */
    onPopupVisibleChange?: (visible: boolean) => void;
    /**
     * callback when popup node is aligned
     */
    onPopupAlign?: (popupDomNode: HTMLElement, align: TriggerPopupAlignConfig) => void;
    /**
     * function returning html node which will act as popup container
     */
    getPopupContainer?: () => HTMLElement;
    /**
     * function returning document node which will be attached click event to close trigger
     */
    getDocument?: () => HTMLElement;
  }

  export default class Trigger extends React.Component<TriggerProps> {
    public forcePopupAlign: () => void;
  }
}
