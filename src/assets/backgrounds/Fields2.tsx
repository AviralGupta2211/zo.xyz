import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 360 640"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <g clipPath="url(#prefix__clip012)">
        <path fill="#fff" d="M0 0h360v640H0z" />
        <path fill="url(#prefix__paint0_linear123)" d="M0 0h360v640H0z" />
        <path
          opacity={0.3}
          d="M360 254.922v-10.791a.514.514 0 00-.134-.374.302.302 0 00-.267-.136l-104.556 12.832c32.891-7.08 76.712-20.151 86.272-23.044.2-.068.334-.34.267-.613-.033-.272-.234-.476-.434-.408-15.677 4.153-75.242 8.271-105.459 10.144 31.989-4.46 68.523-12.799 89.448-17.905.2-.034.334-.306.301-.578-.034-.273-.201-.477-.402-.443-25.704 3.88-71.999 4.493-98.004 4.493 18.785-2.995 39.543-11.267 39.777-11.335.167-.068.3-.34.267-.578-.033-.273-.201-.443-.368-.443-12.3 1.396-25.838 2.11-40.245 2.11-69.96 0-140.99-16.678-141.726-16.849-.2-.034-.367.136-.4.375-.034.272.066.544.233.612 10.63 5.447 38.039 12.697 52.713 16.407l-89.581-12.186c-.201-.034-.368.17-.401.443-.034.272.1.51.267.578 23.465 8.204 74.239 15.284 91.921 17.598-22.897-.34-88.278-8.986-88.946-9.088-.167-.034-.334.136-.368.409-.033.238.067.51.234.612 13.17 7.557 78.417 19.096 92.59 21.547-1.705.238-3.777.374-6.184.374-30.284 0-107.966-18.721-108.734-18.925-.168-.034-.335.102-.402.34-.066.238.034.511.168.613 8.79 6.365 58.595 19.674 82.662 25.903C68.392 238.889.237 222.687-.532 222.517c-.1-.034-.2.034-.3.102a.737.737 0 00-.135.408v9.327c0 .272.134.476.301.511l74.473 16.44c-5.415.919-11.599 1.396-18.484 1.396-26.741 0-55.588-7.046-55.888-7.114-.1-.034-.201 0-.301.102a.737.737 0 00-.134.408v218.699c0 .272 361 .272 361 0V261.151c0-.171-.033-.307-.134-.409-.1-.102-.2-.136-.301-.102-14.406 4.221-42.35 6.025-54.651 6.672l54.785-11.88c.201-.034.301-.272.301-.51zm-234.115 6.058c12.568 1.362 19.387 5.004 19.287 7.012-.067 1.566-4.479 3.234-12.502 3.234-2.34 0-4.78-.136-7.287-.408-12.568-1.362-19.387-5.004-19.286-7.012.067-1.566 4.479-3.234 12.501-3.234 2.306.034 4.78.17 7.287.408z"
          fill="url(#prefix__paint1_linear123)"
          fillOpacity={0.52}
        />
        <path
          opacity={0.52}
          d="M395.728 511.121c-.678 3.09-.407 5.603-.407 5.603l.679 8.049-2.34.407c-44.25 7.744-85.889 14.909-85.889 14.909s-3.357-2.445-7.765-6.282c-9.63-8.423-24.346-23.502-19.972-34.301 6.375-15.724 21.43-4.11 21.43-4.11s-6.646-17.999-5.425-26.15c1.661-10.697 8.341-30.327 32.45-17.184 20.277 11.037 17.259 25.777 15.767 30.192-.271.611-.407 1.052-.475 1.222.068-.17.271-.577.475-1.222 1.899-4.653 8.782-20.004 15.021-12.193 6.985 8.762-.475 23.841-1.119 25.132.848-1.257 10.24-15.045 15.191-6.011 5.154 9.509-1.628 22.38.17 19.867 1.797-2.513 10.206-19.29 17.767-8.694 2.306 3.328 3.696 7.098 4.442 10.766z"
          fill="url(#prefix__paint2_linear123)"
        />
        <path
          opacity={0.24}
          d="M395.728 511.12c-.678 3.091-.407 5.604-.407 5.604l.679 8.049-2.34.407c-1.221-4.415-3.357-9.475-7.019-11.343-6.985-3.566-12.037 10.766-12.037 10.766s-4.408-15.52-9.664-17.796c-5.052-2.207-10.749 8.524-11.156 9.272.068-1.087 1.526-23.603-2.136-26.049-3.628-2.479-11.122 17.389-11.495 18.407.068-1.154 1.831-25.844-2.475-28.221-4.341-2.412-6.443 4.143-6.443 4.143s-19.531-27.101-28.008-15.996c-8.443 11.106 9.935 40.584 9.935 40.584-9.935-6.86-26.143-11.207-28.076-.917-1.153 6.215 7.697 17.66 14.92 25.742-9.63-8.422-24.346-23.501-19.972-34.3 6.375-15.724 21.43-4.11 21.43-4.11s-6.646-17.999-5.425-26.15c1.661-10.698 8.341-30.327 32.45-17.184 20.277 11.037 17.259 25.776 15.767 30.191 1.899-4.652 8.782-20.003 15.021-12.192 6.985 8.762-.475 23.841-1.119 25.132.848-1.257 10.24-15.045 15.191-6.012 5.154 9.51-1.628 22.381.17 19.868 1.797-2.513 10.206-19.29 17.767-8.694 2.306 3.362 3.696 7.132 4.442 10.799z"
          fill="url(#prefix__paint3_linear123)"
        />
        <path
          opacity={0.62}
          d="M268.343 533.433c-3.628-7.302-9.359-3.634-13.495.407-2.238 2.208-4.001 4.483-4.747 5.23-2.103 2.106 6.306-9.135 2.814-18.984-3.357-9.373-14.377 2.343-15.36 3.43.813-1.155 10.206-14.399 4.848-23.807-4.781-8.388-13.631 5.162-16.14 9.374 2.069-3.974 7.189-17.558-10.477-31.177-21.057-16.165-30.891 10.562-32.993 11.241-2.102.714 7.019-7.709 2.102-18.271a10.372 10.372 0 00-.949-1.664c-4.917-6.792-11.8 8.049-13.801 8.694-2.068.713 5.392-12.26-3.119-17.999-.136-.102-.238-.17-.373-.272-9.122-5.604-11.936 16.166-11.936 16.166s1.39-16.845-25.262-28.12c-26.651-11.241-51.913 16.165-51.913 16.165s2.102-26.014-14.038-26.014-26.652 33.723-26.652 33.723 1.39-15.452-10.545-15.452c-11.224 0-9.392 17.388-9.155 19.494-.238-1.359-1.967-9.713-8.375-10.358-7.02-.68-5.595 10.528-5.595 10.528s-4.239-14.773-14.716-11.241c-7.765 2.581-12.479 15.486-14.411 22.074-.034.034-.034.068-.068.17 2.882 4.585 3.662 13.415 3.9 19.392.27-5.366 1.559-11.92 6.34-9.305 4.612 2.513 5.222 11.275 4.95 17.931-.169 4.211-.678 7.607-.745 8.015.27-1.019 5.357-19.324 20.345-9.102.44.306.881.612 1.288.951l.61.51c13.462 12.022 12.784 44.251 12.784 44.251s1.153.679 3.39 1.766c8.545 4.211 33.264 14.637 73.276 17.965 30.687 2.548 75.174 4.517 113.863 3.057a408.045 408.045 0 0128.856-.034c10.376.34 17.124.917 17.124.917l8.952-25.844.237-7.642v-.136s.441-2.411 1.56-5.264c-.204-3.464-.645-7.301-2.374-10.765zm-42.351-23.909a4.887 4.887 0 01-.271.476c.034-.136.135-.306.271-.476z"
          fill="#6D8E1C"
        />
        <path
          opacity={0.2}
          d="M272.811 582.269c-7.968-.271-18.039-.373-28.855.034-38.69 1.427-83.177-.509-113.864-3.056-40.011-3.328-64.73-13.788-73.275-17.966-1.865-2.445-2.815-3.939-2.815-3.939s.17-30.26-13.36-42.078l-.61-.509c-.407-.34-.847-.68-1.288-.951-14.988-10.257-20.074 8.082-20.345 9.101.068-.407.576-3.769.746-8.015 3.085-4.652 7.561-8.388 14.004-9.543 20.345-3.498 26.652 27.407 26.652 27.407s9.121-28.799 17.564-27.407c8.41 1.427 3.493 29.513 3.493 29.513s18.92-29.513 35.061-26.694c16.14 2.819 28.076 30.226 28.076 30.226s4.916-21.804 14.038-18.985c2.644.815 4.001 2.921 4.577 5.502 1.967-9.917 6.171-20.716 15.089-19.562 16.14 2.106 29.466 39.361 29.466 39.361s4.917-23.908 16.141-18.95c11.223 4.924 16.14 25.98 16.14 25.98s4.917-19.663 12.614-9.815c3.051 3.906 17.022 28.901 20.751 40.346z"
          fill="#244E02"
        />
        <path
          opacity={0.3}
          d="M167.039 460.075c-4.306 13.89-12.275 28.867-26.347 25.742-25.261-5.603-20.345-21.769-23.159-23.195-2.814-1.393 4.917 25.301-9.121 23.875-14.038-1.393-18.955-21.77-18.955-21.77s-9.121 24.588-26.652 25.981c-8.68.713-15.123-3.94-19.429-8.796 1.39 5.23-.068 11.513-10.749 16.539-17.632 8.286-32.246-7.743-37.706-14.977 3.086 4.958 7.257 13.754-2.305 14.264-13.326.713-16.853-14.773-16.853-14.773s0 1.901-1.763 3.803c1.933-6.588 6.646-19.46 14.41-22.075 10.512-3.531 14.751 11.242 14.751 11.242s-1.39-11.242 5.595-10.528c6.442.645 8.138 8.965 8.375 10.358-.237-2.106-2.068-19.494 9.155-19.494 11.936 0 10.512 15.452 10.512 15.452S47.309 438 63.45 438c16.14 0 14.038 26.014 14.038 26.014s25.261-27.406 51.913-16.165c26.652 11.241 25.261 28.12 25.261 28.12s2.815-21.77 11.936-16.166c.17.102.305.17.441.272z"
          fill="#39B54A"
        />
        <path
          d="M360 517.291V640H0V511c5.51.401 11.055.821 16.566 1.277 2.571.2 5.11.419 7.681.62 6.279.51 12.858 1.002 19.739 1.44 87.002 5.599 220.128 5.416 316.014 2.954z"
          fill="url(#prefix__paint4_linear123)"
        />
        <path
          d="M365.496 512.162v11.75c-64.494-1.188-143.669-2.445-240.443-3.803a10194.44 10194.44 0 00-84.092-.815c-6.036-.034-11.97-.068-17.768-.068-7.934-.034-15.665-.034-23.193-.034V498c4.747.509 9.46 1.019 14.207 1.596 10.715 1.257 21.464 2.581 32.18 4.042l10.375 1.426c84.906 12.056 210.875 11.818 308.734 7.098z"
          fill="url(#prefix__paint5_linear123)"
        />
        <path
          d="M54.592 598.756l-16.073.475M35.4 604.937l-11.699.373"
          stroke="#111D36"
          strokeWidth={0.339}
          strokeMiterlimit={10}
        />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear123"
          x1={177.328}
          y1={677.687}
          x2={181.213}
          y2={-114.926}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29ABE2" />
          <stop offset={0.19} stopColor="#2CAADF" />
          <stop offset={0.345} stopColor="#36A8D5" />
          <stop offset={0.487} stopColor="#46A4C4" />
          <stop offset={0.622} stopColor="#5E9EAC" />
          <stop offset={0.751} stopColor="#A4CCBD" />
          <stop offset={0.878} stopColor="#DCC841" />
          <stop offset={0.995} stopColor="#D7C441" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear123"
          x1={179.515}
          y1={463.047}
          x2={179.515}
          y2={201.004}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear123"
          x1={315.199}
          y1={440.845}
          x2={352.931}
          y2={554.761}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#47C14A" />
          <stop offset={0.008} stopColor="#46BF49" />
          <stop offset={0.182} stopColor="#36A03E" />
          <stop offset={0.365} stopColor="#2A8735" />
          <stop offset={0.555} stopColor="#21762F" />
          <stop offset={0.759} stopColor="#1C6B2B" />
          <stop offset={1} stopColor="#1A682A" />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear123"
          x1={315.199}
          y1={440.845}
          x2={352.931}
          y2={554.761}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#47C14A" />
          <stop offset={0.008} stopColor="#46BF49" />
          <stop offset={0.182} stopColor="#36A03E" />
          <stop offset={0.365} stopColor="#2A8735" />
          <stop offset={0.555} stopColor="#21762F" />
          <stop offset={0.759} stopColor="#1C6B2B" />
          <stop offset={1} stopColor="#1A682A" />
        </linearGradient>
        <linearGradient
          id="prefix__paint4_linear123"
          x1={0.015}
          y1={575.483}
          x2={360.015}
          y2={575.483}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.005} stopColor="#D2A45E" />
          <stop offset={0.995} stopColor="#C9946F" />
        </linearGradient>
        <linearGradient
          id="prefix__paint5_linear123"
          x1={423.523}
          y1={578.098}
          x2={-56.325}
          y2={454.067}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#94B216" />
          <stop offset={0.99} stopColor="#788F0B" />
        </linearGradient>
        <clipPath id="prefix__clip012">
          <path fill="#fff" d="M0 0h360v640H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
