declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.webp' {
    const value: any;
    export default value;
}