import React, { ReactElement } from 'react'
import { SVGIconInterface } from '../../utils/interfaces';

const LogoBlackSVG: React.FC<SVGIconInterface> = ({
    size, svgClass, onClick, fill
}: SVGIconInterface): ReactElement => {
    return (
        <svg fill={fill} onClick={() => onClick?.()} width={size} className={svgClass} xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="200 300 1066 168">
            <path d="m200.69,317.22h25.08v44.04c6.77-4.85,14.81-7.28,24.13-7.28s17.17,2.2,24.7,6.61c7.53,4.4,13.53,10.41,18,18,4.47,7.6,6.7,15.86,6.7,24.8s-2.23,17.2-6.7,24.8c-4.47,7.6-10.47,13.59-18,18-7.53,4.4-15.77,6.61-24.7,6.61s-17.17-2.2-24.7-6.61c-7.53-4.4-13.5-10.4-17.9-18-4.4-7.59-6.61-15.86-6.61-24.8v-86.16Zm31.78,68.26c-4.72,4.79-7.08,10.76-7.08,17.9s2.36,13.12,7.08,17.9c4.72,4.79,10.59,7.18,17.62,7.18s12.83-2.39,17.42-7.18c4.59-4.79,6.89-10.75,6.89-17.9s-2.3-13.12-6.89-17.9c-4.6-4.79-10.41-7.18-17.42-7.18s-12.89,2.39-17.62,7.18Z" />
            <path d="m397.9,355.51v50.36c0,15.58-3.83,27.28-11.49,35.13s-17.87,11.78-30.64,11.78-22.98-3.92-30.64-11.78c-7.66-7.85-11.49-19.56-11.49-35.13v-50.36h24.89v50.36c0,7.79,1.37,13.5,4.12,17.14,2.74,3.64,7.11,5.46,13.11,5.46s10.37-1.82,13.11-5.46,4.12-9.35,4.12-17.14v-50.36h24.89Z" />
            <path d="m415.13,317.22h25.08v44.04c6.77-4.85,14.81-7.28,24.13-7.28s17.17,2.2,24.7,6.61c7.53,4.4,13.53,10.41,18,18,4.47,7.6,6.7,15.86,6.7,24.8s-2.23,17.2-6.7,24.8c-4.47,7.6-10.47,13.59-18,18-7.53,4.4-15.77,6.61-24.7,6.61s-17.17-2.2-24.7-6.61c-7.53-4.4-13.5-10.4-17.9-18-4.4-7.59-6.61-15.86-6.61-24.8v-86.16Zm31.78,68.26c-4.72,4.79-7.08,10.76-7.08,17.9s2.36,13.12,7.08,17.9c4.72,4.79,10.59,7.18,17.62,7.18s12.83-2.39,17.42-7.18c4.59-4.79,6.89-10.75,6.89-17.9s-2.3-13.12-6.89-17.9c-4.6-4.79-10.41-7.18-17.42-7.18s-12.89,2.39-17.62,7.18Z" />
            <path d="m599.42,360.59c7.59,4.4,13.59,10.41,18,18,4.4,7.6,6.6,15.86,6.6,24.8s-2.2,17.2-6.6,24.8c-4.41,7.6-10.41,13.59-18,18-7.6,4.4-15.86,6.61-24.8,6.61s-17.2-2.2-24.8-6.61c-7.6-4.4-13.59-10.4-18-18-4.4-7.59-6.61-15.86-6.61-24.8s2.2-17.2,6.61-24.8c4.4-7.59,10.4-13.59,18-18,7.59-4.4,15.86-6.61,24.8-6.61s17.2,2.2,24.8,6.61Zm-42.22,24.89c-4.73,4.79-7.08,10.76-7.08,17.9s2.36,13.12,7.08,17.9c4.72,4.79,10.59,7.18,17.62,7.18s12.83-2.39,17.42-7.18,6.89-10.75,6.89-17.9-2.3-13.12-6.89-17.9c-4.6-4.79-10.41-7.18-17.42-7.18s-12.89,2.39-17.62,7.18Z" />
            <path d="m638.39,400.89c0-15.19,3.76-26.62,11.3-34.27,7.53-7.66,17.42-11.49,29.68-11.49h1.15v24.32h-.96c-5.49,0-9.57,1.72-12.25,5.17-2.68,3.45-4.02,8.87-4.02,16.27v50.36h-24.89v-50.36Z" />
            <path d="m773.76,424.06l15.89,9.57c-9.76,13.21-24.32,19.53-40.59,19.53-29.87,0-49.21-20.49-49.21-48.83,0-26.81,17.62-48.64,46.34-48.64s45.57,21.83,45.57,46.91c0,3.64-.19,6.7-.38,8.23h-70.66c1.34,14.74,11.87,24.89,28.53,24.89,9,0,17.81-3.06,24.51-11.68Zm-52.47-28.15h49.59c-.96-12.83-10.53-23.17-24.51-23.17s-23.74,10.15-25.08,23.17Z" />
            <path d="m813.01,317.22h24.89v69.89l31.78-31.59h31.79l-36.38,36.76,42.51,58.97h-27.76l-31.59-43.27-10.34,10.34v32.93h-24.89v-134.03Z" />
            <path d="m978.91,360.59c7.59,4.4,13.59,10.41,18,18,4.4,7.6,6.6,15.86,6.6,24.8s-2.2,17.2-6.6,24.8c-4.41,7.6-10.41,13.59-18,18-7.6,4.4-15.86,6.61-24.8,6.61s-17.2-2.2-24.8-6.61c-7.6-4.4-13.59-10.4-18-18-4.4-7.59-6.61-15.86-6.61-24.8s2.2-17.2,6.61-24.8c4.4-7.59,10.4-13.59,18-18,7.59-4.4,15.86-6.61,24.8-6.61s17.2,2.2,24.8,6.61Zm-42.22,24.89c-4.73,4.79-7.08,10.76-7.08,17.9s2.36,13.12,7.08,17.9c4.72,4.79,10.59,7.18,17.62,7.18s12.83-2.39,17.42-7.18,6.89-10.75,6.89-17.9-2.3-13.12-6.89-17.9c-4.6-4.79-10.41-7.18-17.42-7.18s-12.89,2.39-17.62,7.18Z" />
            <path d="m1153.44,365.85c7.91,7.92,11.87,19.6,11.87,35.04v50.36h-24.89v-50.36c0-7.66-1.47-13.34-4.4-17.04-2.94-3.7-7.53-5.55-13.79-5.55s-10.69,1.85-13.69,5.55c-3,3.7-4.5,9.38-4.5,17.04v50.36h-24.89v-50.36c0-7.66-1.47-13.34-4.4-17.04-2.94-3.7-7.53-5.55-13.79-5.55s-10.69,1.85-13.69,5.55c-3,3.7-4.5,9.38-4.5,17.04v50.36h-24.89v-50.36c0-15.44,3.95-27.12,11.87-35.04,7.91-7.91,18.31-11.87,31.21-11.87,6.38,0,12.22,1.12,17.52,3.35,5.3,2.23,9.67,5.52,13.11,9.86,3.45-4.34,7.82-7.63,13.11-9.86,5.3-2.23,11.14-3.35,17.52-3.35,12.89,0,23.29,3.96,31.21,11.87Z" />
            <path d="m764.27,338.39h-34.73c-3.42,0-6.19-2.77-6.19-6.18v-11.18c0-3.42,2.77-6.19,6.19-6.19h34.73c3.42,0,6.19,2.77,6.19,6.19v11.18c0,3.42-2.77,6.18-6.19,6.18" />
        </svg>
    )
}

export default LogoBlackSVG;