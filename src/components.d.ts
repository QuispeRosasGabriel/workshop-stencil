/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MeetupButton {
        "labeltext": string;
        "textbutton": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyList {
        "hasmanymembers": boolean;
        "members": number;
    }
    interface MyNavbar {
        "hasnewaccount": boolean;
        "isadmin": boolean;
        "isallowed": boolean;
        "islogged": boolean;
        "type": string;
    }
}
declare global {
    interface HTMLMeetupButtonElement extends Components.MeetupButton, HTMLStencilElement {
    }
    var HTMLMeetupButtonElement: {
        prototype: HTMLMeetupButtonElement;
        new (): HTMLMeetupButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyListElement extends Components.MyList, HTMLStencilElement {
    }
    var HTMLMyListElement: {
        prototype: HTMLMyListElement;
        new (): HTMLMyListElement;
    };
    interface HTMLMyNavbarElement extends Components.MyNavbar, HTMLStencilElement {
    }
    var HTMLMyNavbarElement: {
        prototype: HTMLMyNavbarElement;
        new (): HTMLMyNavbarElement;
    };
    interface HTMLElementTagNameMap {
        "meetup-button": HTMLMeetupButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-list": HTMLMyListElement;
        "my-navbar": HTMLMyNavbarElement;
    }
}
declare namespace LocalJSX {
    interface MeetupButton {
        "labeltext"?: string;
        "textbutton"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyList {
        "hasmanymembers"?: boolean;
        "members"?: number;
    }
    interface MyNavbar {
        "hasnewaccount"?: boolean;
        "isadmin"?: boolean;
        "isallowed"?: boolean;
        "islogged"?: boolean;
        "type"?: string;
    }
    interface IntrinsicElements {
        "meetup-button": MeetupButton;
        "my-component": MyComponent;
        "my-list": MyList;
        "my-navbar": MyNavbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "meetup-button": LocalJSX.MeetupButton & JSXBase.HTMLAttributes<HTMLMeetupButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-list": LocalJSX.MyList & JSXBase.HTMLAttributes<HTMLMyListElement>;
            "my-navbar": LocalJSX.MyNavbar & JSXBase.HTMLAttributes<HTMLMyNavbarElement>;
        }
    }
}
