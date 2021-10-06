import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 468 603"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M138.756 164.213L159.657 218.029L177.335 222.86L154.026 159.082L138.756 164.213Z"
        fill="#EF6623"
      />
      <path
        d="M239.916 182.789L218.266 226.649L218.161 226.957L213.863 265.466C213.857 265.544 213.929 265.63 214.014 265.558L250.384 246.429L250.47 246.357L277.334 205.558L239.916 182.789Z"
        fill="#F06924"
      />
      <path
        d="M197.668 403.083L104.047 346.115L57.6074 431.584L89.7776 451.687L117.686 406.058L138.057 418.416L112.28 466.051L141.225 483.024L197.668 403.083Z"
        fill="#BABABA"
      />
      <path
        d="M104.049 346.115L45.0039 445.509L3.50799 526.003L34.0589 544.62L58.5783 504.336L73.8783 479.216C73.8783 479.216 102.967 434.638 114.437 420.062L125.075 426.518C116.323 445.529 92.361 490.462 92.361 490.462L77.0611 515.582L52.5416 555.866L82.9416 574.391L119.709 526.26L197.584 403.156L104.049 346.115Z"
        fill="#7ABFDC"
      />
      <path
        d="M285.386 280.813L249.214 240.538L220.071 255.837L223.556 225.034L169.065 209.94L170.981 228.508L172.692 229.843L104.045 346.114L197.665 403.083L265.552 286.43L267.887 287.897L285.386 280.813Z"
        fill="#EF6623"
      />
      <path
        d="M232.971 128.094C232.404 130.109 231.843 132.044 231.361 133.987C227.801 148.838 227.832 163.438 233.306 177.468C239.885 194.368 251.783 205.612 269.501 209.97C282.56 213.141 295.417 211.217 307.858 205.767C316.346 202.044 323.843 196.888 330.575 190.478C331.265 189.823 331.502 189.843 332.072 190.605C333.69 193.043 336.15 193.966 339.032 193.655C341.593 193.396 343.912 192.244 345.949 190.671C349.847 187.749 352.629 183.939 354.434 179.491C355.831 176.119 356.604 172.615 356.045 168.918C355.577 166.022 354.346 163.696 351.676 162.438C350.915 162.057 350.856 161.814 351.153 161.125C353.412 156.001 355.205 150.759 356.382 145.305C359.719 130.277 359.301 115.565 353.348 101.573C346.996 86.675 336.363 76.4119 320.897 71.6887C307.596 67.6253 294.386 69.0435 281.406 74.2892C268.177 79.6724 257.365 88.3547 248.322 99.567C247.875 100.164 247.704 100.308 247.213 99.5522C245.523 97.0289 243.141 96.1129 240.18 96.4171C237.698 96.6826 235.544 97.7691 233.519 99.1841C230.142 101.595 227.57 104.788 225.667 108.514C223.758 112.319 222.551 116.262 223.057 120.589C223.626 126.032 227.324 129.202 232.65 128.146C232.735 128.074 232.814 128.081 232.971 128.094Z"
        fill="white"
      />
      <path
        d="M232.973 128.094C232.815 128.081 232.736 128.074 232.657 128.067C227.332 129.123 223.713 125.96 223.064 120.51C222.552 116.262 223.766 112.24 225.675 108.435C227.578 104.709 230.149 101.516 233.527 99.105C235.551 97.69 237.706 96.6035 240.188 96.338C243.149 96.0338 245.61 96.9565 247.221 99.4731C247.719 100.15 247.89 100.006 248.33 99.4879C257.294 88.269 268.185 79.5933 281.414 74.2101C294.394 68.9644 307.604 67.5462 320.905 71.6096C336.371 76.3328 347.003 86.5959 353.356 101.494C359.309 115.486 359.727 130.198 356.39 145.226C355.213 150.679 353.42 155.922 351.161 161.046C350.858 161.813 350.916 162.056 351.684 162.359C354.354 163.617 355.663 165.95 356.053 168.839C356.619 172.457 355.846 175.961 354.442 179.412C352.63 183.939 349.776 187.664 345.957 190.592C343.841 192.158 341.601 193.317 339.04 193.576C336.158 193.886 333.691 193.042 332.08 190.526C331.588 189.77 331.359 189.671 330.583 190.399C323.851 196.809 316.347 202.043 307.866 205.687C295.425 211.137 282.568 213.062 269.509 209.891C249.799 207.506 239.965 194.375 233.313 177.389C232.339 174.847 231.45 172.233 230.797 169.639C227.9 157.969 228.357 146.028 231.29 133.901C231.844 132.044 232.405 130.108 232.973 128.094ZM276.708 167.107C269.087 162.494 261.544 157.887 253.929 153.195C253.024 152.643 252.847 152.866 252.451 153.784C250.909 157.937 250.47 162.184 251.054 166.517C252.829 178.33 262.156 188.086 274.179 190.375C283.859 192.227 292.456 190.021 299.603 182.456C300.306 181.643 300.162 181.472 299.408 181.011C291.872 176.326 284.329 171.72 276.708 167.107ZM266.804 134.216C274.275 138.737 284.086 136.237 288.792 128.465C293.576 120.699 291.404 110.757 283.855 106.23C276.312 101.623 266.494 104.202 261.789 111.974C257.084 119.746 259.255 129.688 266.804 134.216ZM326.776 132.401C319.305 127.88 309.487 130.458 304.789 138.152C300.005 145.917 302.255 155.866 309.725 160.387C317.268 164.994 327.007 162.408 331.791 154.643C336.496 146.871 334.239 137.001 326.776 132.401ZM342.098 132.272C342.446 131.905 342.23 131.649 341.942 131.307C338.271 127.822 334.685 124.266 331.014 120.781C330.575 120.347 330.181 120.314 329.812 120.917C329.635 121.14 329.457 121.363 329.201 121.579C328.767 122.018 328.655 122.406 329.166 122.925C332.542 126.147 335.911 129.447 339.36 132.754C340.612 133.892 340.848 133.912 342.098 132.272ZM293.103 98.2082C293.024 98.2015 292.952 98.1161 292.874 98.1094C288.018 96.4282 283.084 94.7403 278.229 93.0592C277.841 92.947 277.592 93.0845 277.486 93.3929C277.381 93.7013 277.269 94.0884 277.078 94.4689C276.781 95.1578 276.905 95.5649 277.68 95.7893C282.155 97.2795 286.623 98.8485 291.019 100.332C292.482 100.853 293.33 100.211 293.385 98.6287C293.405 98.3924 293.34 98.2282 293.103 98.2082Z"
        fill="#F06924"
      />
      <path
        d="M266.804 134.217C259.261 129.611 257.083 119.747 261.788 111.975C266.494 104.203 276.312 101.624 283.854 106.231C291.318 110.831 293.496 120.694 288.791 128.466C284.086 136.238 274.268 138.817 266.804 134.217ZM275.516 120.359C273.476 119.155 270.803 119.801 269.514 121.912C268.224 124.024 268.863 126.776 270.903 127.98C272.943 129.185 275.616 128.539 276.905 126.427C278.116 124.308 277.556 121.563 275.516 120.359Z"
        fill="#F06924"
      />
      <path
        d="M326.773 132.402C334.316 137.009 336.494 146.872 331.789 154.644C327.084 162.416 317.266 164.995 309.723 160.388C302.259 155.789 300.002 145.919 304.786 138.153C309.485 130.46 319.303 127.881 326.773 132.402ZM318.435 146.53C316.395 145.326 313.723 145.972 312.433 148.084C311.143 150.196 311.782 152.947 313.822 154.152C315.862 155.356 318.535 154.71 319.825 152.598C321.114 150.486 320.475 147.734 318.435 146.53Z"
        fill="#F06924"
      />
      <path
        d="M342.094 132.273C340.923 133.919 340.608 133.892 339.283 132.669C335.914 129.369 332.538 126.147 329.09 122.84C328.5 122.314 328.605 122.005 329.125 121.494C329.302 121.271 329.559 121.055 329.736 120.832C330.098 120.307 330.498 120.262 330.938 120.696C334.602 124.259 338.194 127.737 341.866 131.222C342.226 131.649 342.442 131.906 342.094 132.273Z"
        fill="#3B3936"
      />
      <path
        d="M293.102 98.2084C293.332 98.3072 293.404 98.3926 293.377 98.7077C293.322 100.29 292.475 100.932 291.012 100.411C286.543 98.842 282.147 97.3585 277.672 95.8683C276.905 95.5652 276.774 95.2367 277.07 94.5479C277.254 94.2462 277.288 93.8524 277.479 93.4719C277.591 93.0847 277.841 92.9472 278.221 93.1382C283.076 94.8193 288.011 96.5072 292.866 98.1883C292.951 98.1162 293.03 98.1229 293.102 98.2084Z"
        fill="#3B3936"
      />
      <path
        d="M275.52 120.359C277.559 121.564 278.199 124.315 276.909 126.427C275.619 128.539 272.94 129.264 270.906 127.981C268.867 126.776 268.227 124.025 269.517 121.913C270.728 119.794 273.486 119.076 275.52 120.359Z"
        fill="#F06924"
      />
      <path
        d="M318.438 146.529C320.477 147.733 321.117 150.485 319.827 152.597C318.537 154.709 315.858 155.433 313.824 154.15C311.785 152.946 311.145 150.194 312.435 148.082C313.646 145.964 316.404 145.246 318.438 146.529Z"
        fill="#F06924"
      />
      <path
        d="M350.806 45.5072C409.868 45.9947 402.888 145.124 386.028 172.73C338.016 251.482 276.541 249.52 260.008 247.087C257.501 246.715 255.534 244.645 255.361 242.012C253.762 222.519 269.581 209.977 269.581 209.977C288.632 214.529 313.255 206.7 330.655 190.485C348.056 174.27 344.898 147.901 344.898 147.901C328.062 119.103 319.194 78.6844 319.194 78.6844C319.194 78.6844 285.749 108.216 247.732 99.9931C247.732 99.9931 242.838 93.152 233.6 99.1911C227.744 103.692 223.83 108.676 223.137 120.596C223.565 123.965 225.552 129.528 233.045 128.18C233.045 128.18 226.358 152.761 232.228 174.283L218.38 181.359C216.974 182.033 215.34 181.656 214.495 180.394C208.652 171.648 190.513 136.71 225.436 79.4587C225.37 79.2945 310.039 -21.0204 350.806 45.5072Z"
        fill="#3B3936"
      />
      <path
        d="M263.635 121.967C263.182 121.691 262.828 121.185 262.718 120.62C262.496 119.491 263.226 118.363 264.363 118.062C269.708 116.77 280.854 117.24 285.092 128.071C285.478 129.135 284.977 130.362 283.907 130.827C282.836 131.291 281.609 130.791 281.223 129.726C277.175 119.466 265.689 122.062 265.203 122.18C264.639 122.29 264.087 122.244 263.635 121.967Z"
        fill="#CC4D27"
      />
      <path
        d="M322.777 158.005C322.325 157.728 321.964 157.301 321.854 156.736C321.736 156.25 318.74 144.81 307.854 145.95C306.731 146.092 305.695 145.211 305.638 144.016C305.581 142.822 306.462 141.786 307.578 141.722C319.179 140.564 324.62 150.307 325.998 155.581C326.298 156.717 325.568 157.845 324.425 158.224C323.86 158.335 323.23 158.281 322.777 158.005Z"
        fill="#CC4D27"
      />
      <path
        d="M154.473 168.799L160.216 106.693L175.883 91.282L200.137 88.7379L196.984 76.3325L173.866 83.257L168.576 68.9251L170.933 33.663L162.502 30.1713L158.578 60.5404L149.347 30.0075L138.407 31.7769L140.366 65.739L132.15 45.6848L124.878 49.114L130.708 66.4271L128.318 98.3543L142 111.018L138.314 161.955C138.039 166.136 141.244 169.502 145.301 169.37L154.473 168.799Z"
        fill="#EF6623"
      />
      <path
        d="M316.229 329.319L277.481 301.477L282.186 289.561L315.111 312.989L316.229 329.319Z"
        fill="#EF6623"
      />
      <path
        d="M306.056 316.019L360.527 288.259L368.598 267.877L361.727 243.944L374.283 242.415L376.723 266.769L391.828 266.576L423.101 251.717L429.478 258.417L403.233 273.01L434.584 270.778L437.141 281.804L405.413 292.16L426.828 292.759L426.45 300.883L408.434 301.57L380.266 315.233L363.465 306.791L318.478 328.525C314.862 330.31 310.488 328.434 309.099 324.546L306.056 316.019Z"
        fill="#EF6623"
      />
      <path
        d="M332.792 298.083L284.593 271.464C284.593 271.464 277.079 260.91 268.278 255.245L255.521 247.578L250.753 248.602C234.842 251.933 219.502 241.984 216.013 226.06L214.592 219.434L209.653 216.873C200.712 211.91 196.256 211.135 186.09 209.4L181.24 208.592L170.055 172.103L124.879 196.831L157.74 238.729L155.121 247.154L96.2722 347.041L143.268 383.157L143.176 383.308L156.205 393.378L198.104 409.149L258.375 301.846L264.902 300.654L310.888 331.845L332.792 298.083Z"
        fill="#316AF7"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
