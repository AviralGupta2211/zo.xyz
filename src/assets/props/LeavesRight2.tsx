import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 342 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M81.402 166.359a336.631 336.631 0 019.76-14.437c-3.118 4.88-6.168 9.828-9.015 14.911-2.779 5.083-5.49 10.234-7.998 15.386a363.598 363.598 0 00-7.116 15.792c-2.237 5.354-4.406 10.709-6.44 16.131a667.858 667.858 0 00-5.896 16.335c-1.83 5.49-3.728 10.98-5.422 16.47-1.627 5.354-3.05 10.777-4.338 16.267 1.762-.543 3.525-1.83 4.812-3.05 3.321-3.05 6.575-6.236 9.625-9.625-1.22.068-2.44.136-3.66.339-1.898.271-3.796.542-5.422 1.423a35.39 35.39 0 0112.2-5.219c5.829-6.777 11.115-14.03 15.724-21.689-1.762.271-3.524.746-5.287 1.288-5.015 1.491-9.895 3.321-14.572 5.558 7.117-4.406 14.64-8.201 22.435-11.251 1.49-2.644 2.846-5.287 4.202-7.998 1.966-4.067 3.796-8.133 5.422-12.336-2.304.204-4.609.814-6.778 1.491-5.015 1.492-9.895 3.322-14.64 5.558 7.32-4.541 15.047-8.404 23.113-11.454 1.22-3.321 2.304-6.71 3.253-10.099a39.72 39.72 0 00-4.812 1.559 107.186 107.186 0 00-14.166 6.506 136.514 136.514 0 0120.063-11.996c1.49-5.829 2.575-11.794 3.32-17.758l-1.83.61a85.063 85.063 0 00-11.86 5.422c4.405-3.186 9.082-6.1 13.962-8.608.203-1.762.339-3.457.474-5.219.136-1.898.204-3.795.339-5.625-.407.135-.813.339-1.22.542-2.847 1.355-5.626 2.847-8.269 4.609 3.05-2.576 6.236-4.948 9.625-7.049.271-3.05.677-6.168 1.491-9.082.542-1.966 1.084-3.796 2.304-5.49-2.779.61-5.693 2.643-8.201 3.998a140.34 140.34 0 00-10.912 6.846c.474 3.389.813 6.846.949 10.235-.543-3.186-1.22-6.372-2.101-9.489-1.017.745-2.102 1.423-3.118 2.169-3.321 2.372-6.575 4.947-9.692 7.591 1.152 5.083 2.033 10.166 2.575 15.385-1.084-4.744-2.508-9.421-4.27-13.894a133.585 133.585 0 00-7.794 7.388 130.489 130.489 0 014.88 21.553c-1.288-5.015-3.05-9.963-5.084-14.776-.61-1.423-1.288-2.914-2.101-4.27-1.559 1.695-3.05 3.457-4.541 5.287 3.118 7.185 5.558 14.64 7.388 22.231a99.471 99.471 0 00-6.44-14.233c-.948-1.762-1.965-3.457-3.185-5.083a93.383 93.383 0 00-8.743 14.03c3.931 7.184 7.252 14.708 9.963 22.434-2.575-5.219-5.49-10.302-8.879-15.047a50.483 50.483 0 00-2.846-3.795c-.34.678-.61 1.423-.95 2.101-2.643 6.236-4.54 12.675-5.828 19.317a153.385 153.385 0 0110.37 20.876 110.342 110.342 0 00-9.49-14.641c-.541-.677-1.016-1.355-1.558-1.965a92.454 92.454 0 00-.813 18.368 96.618 96.618 0 017.523 12.742 61.233 61.233 0 00-6.439-8.54c-.271-.339-.542-.61-.813-.949.339 4.338 1.084 8.676 2.033 12.946.542 2.236 1.017 5.015 2.305 7.116a237.63 237.63 0 015.015-15.317 676.824 676.824 0 016.304-16.335c2.169-5.422 4.473-10.777 6.777-16.131 2.305-5.355 4.813-10.641 7.32-15.86a479.691 479.691 0 017.998-15.521c2.915-5.016 5.897-10.032 9.015-14.979z"
        fill="#0C512F"
      />
      <path
        d="M181.035 169.408a409.054 409.054 0 0118.843-13.284 363.166 363.166 0 00-18.097 14.233c-5.829 4.948-11.522 10.099-17.08 15.318-5.558 5.287-10.912 10.709-16.199 16.267a520.229 520.229 0 00-15.454 16.944c-5.015 5.762-10.031 11.591-14.911 17.487a870.613 870.613 0 00-14.369 17.826c-4.54 5.829-8.81 11.929-12.945 18.097 2.44.203 5.219-.678 7.388-1.559 5.557-2.237 11.047-4.677 16.402-7.388-1.491-.542-3.05-.949-4.677-1.356-2.44-.542-4.948-1.152-7.388-.745a47.83 47.83 0 0117.555-.813c10.438-5.626 20.333-12.201 29.619-19.521-2.372-.474-4.745-.745-7.117-.881-6.913-.542-13.827-.474-20.672.068a174.4 174.4 0 0133.076-3.389 248.172 248.172 0 008.946-7.93c4.338-4.067 8.54-8.337 12.472-12.742-2.983-.814-6.033-1.152-9.083-1.356-6.913-.542-13.827-.474-20.672.068 11.183-2.237 22.57-3.389 33.957-3.389a195.185 195.185 0 008.743-11.048c-2.237-.271-4.473-.339-6.71-.339-6.913-.067-13.827.407-20.605 1.491a179.205 179.205 0 0130.433-5.49c4.541-6.574 8.743-13.352 12.403-20.469-.881 0-1.694-.067-2.575-.067a104.54 104.54 0 00-17.216 1.22c6.981-1.898 14.098-3.254 21.282-4.135a175.61 175.61 0 002.983-6.235c1.016-2.237 2.033-4.542 3.05-6.846-.61 0-1.152.068-1.762.068-4.203.271-8.337.949-12.404 1.898a107.14 107.14 0 0115.182-4.203c1.763-3.727 3.66-7.32 6.168-10.573 1.627-2.169 3.118-4.202 5.422-5.693-3.727-.543-8.336.61-11.996 1.152-5.626.881-11.184 2.033-16.674 3.321a151.057 151.057 0 01-3.66 13.149 100.199 100.199 0 001.83-12.675c-1.626.407-3.253.814-4.88 1.288a206.198 206.198 0 00-15.521 4.88c-.949 6.778-2.237 13.556-3.999 20.198a130.517 130.517 0 001.22-19.249c-4.473 1.627-8.811 3.525-13.081 5.558a174.976 174.976 0 01-4.067 28.941c.746-6.845.949-13.759.543-20.672-.136-2.101-.272-4.202-.611-6.236a242.828 242.828 0 00-8.133 4.474c.475 10.37 0 20.74-1.288 30.974.068-6.913-.339-13.827-1.355-20.604-.339-2.576-.814-5.219-1.559-7.727-6.1 3.931-11.929 8.337-17.351 13.284 1.491 10.709 2.169 21.622 1.897 32.466-.677-7.659-2.033-15.318-3.931-22.773-.542-2.034-1.084-4.067-1.762-6.032l-2.169 2.168c-6.168 6.439-11.59 13.556-16.199 21.147a194.702 194.702 0 013.05 30.704c-1.016-7.659-2.711-15.183-4.88-22.57-.339-1.085-.678-2.169-1.017-3.186-3.93 7.117-7.116 14.572-9.624 22.299 1.627 6.303 2.711 12.81 3.321 19.317-.949-4.609-2.304-9.15-3.931-13.624-.203-.542-.407-1.016-.61-1.559-1.559 5.558-2.711 11.252-3.525 17.013-.406 2.982-1.016 6.71-.474 9.895 4.27-5.625 8.743-11.251 13.352-16.605 5.084-5.897 10.235-11.59 15.454-17.216a618.665 618.665 0 0115.928-16.741c5.354-5.49 10.912-10.912 16.47-16.199a524.585 524.585 0 0117.148-15.453c5.964-5.152 11.996-9.964 18.096-14.641z"
        fill="#085E2F"
      />
      <path
        d="M46.294 158.224c-1.695-7.524-3.66-14.912-5.83-22.299a427.504 427.504 0 014.677 22.502c1.288 7.591 2.373 15.115 3.186 22.773.813 7.592 1.491 15.251 1.965 22.842.475 7.659.746 15.25.95 22.909.135 7.659.203 15.318.135 22.977-.068 7.658-.203 15.317-.474 22.909-.272 7.387-.882 14.775-1.695 22.163-1.966-1.423-3.592-3.863-4.677-5.964-2.846-5.287-5.422-10.709-7.794-16.199 1.491.61 2.982 1.22 4.405 1.965 2.237 1.152 4.474 2.305 6.1 4.202-3.524-4.744-7.93-8.743-12.945-11.929-4.338-11.047-7.66-22.434-10.1-34.024 2.102 1.152 4.068 2.508 6.033 3.931 5.626 3.999 10.845 8.472 15.793 13.352a175.288 175.288 0 00-23.113-23.926c-.678-3.931-1.22-7.862-1.694-11.861-.678-5.896-1.153-11.861-1.356-17.825 2.779 1.287 5.355 2.982 7.862 4.812a134.891 134.891 0 0115.793 13.352 179.88 179.88 0 00-23.723-24.468c0-4.676.136-9.353.407-14.03 1.898 1.22 3.66 2.644 5.354 4.067 5.287 4.405 10.303 9.218 14.844 14.369a179.783 179.783 0 00-19.791-23.79c.745-7.93 1.965-15.86 3.66-23.655l2.033 1.627a115.236 115.236 0 0112.403 11.997 148.225 148.225 0 00-13.623-16.877c.542-2.237 1.084-4.474 1.694-6.642.678-2.373 1.356-4.813 2.034-7.185.407.407.88.813 1.288 1.22a83.917 83.917 0 018.269 9.421 105.501 105.501 0 00-8.947-13.013c1.084-3.931 1.898-7.93 2.1-12.065.137-2.711.272-5.219-.473-7.862 3.185 1.966 5.964 5.829 8.472 8.608 3.728 4.27 7.252 8.743 10.64 13.284a145.885 145.885 0 00-5.692 12.404c2.033-3.728 4.337-7.388 6.777-10.913.95 1.356 1.966 2.712 2.915 4.135a194.45 194.45 0 018.743 13.691 186.93 186.93 0 00-9.963 18.029c3.456-5.422 7.252-10.641 11.454-15.521 2.305 4.134 4.474 8.337 6.44 12.674-5.83 7.795-11.049 16.064-15.522 24.739 3.863-5.693 8.201-11.115 12.878-16.199 1.423-1.491 2.914-3.05 4.473-4.405a132.545 132.545 0 013.321 8.608c-7.049 7.591-13.352 15.86-18.978 24.535a135.223 135.223 0 0114.302-14.911c1.965-1.762 3.999-3.456 6.235-4.948 2.17 6.914 3.796 14.031 4.745 21.351-8.066 7.252-15.59 15.114-22.367 23.586 5.49-5.422 11.387-10.37 17.69-14.911 1.695-1.22 3.389-2.44 5.219-3.457.068 1.017.203 2.034.203 3.05.543 8.879.136 17.826-1.22 26.637a194.646 194.646 0 00-22.095 21.486c5.693-5.151 11.86-9.896 18.232-14.098.949-.61 1.898-1.22 2.847-1.762a119.598 119.598 0 01-7.05 23.248c-5.354 3.795-10.301 7.998-14.978 12.607 3.728-2.915 7.659-5.558 11.793-7.863l1.423-.813c-2.372 5.287-5.15 10.37-8.268 15.25-1.627 2.576-3.525 5.761-6.033 7.862.407-7.049.542-14.233.475-21.282-.068-7.727-.407-15.453-.746-23.112-.339-7.727-.813-15.386-1.355-23.045-.543-7.659-1.288-15.386-2.17-23.045-.88-7.658-1.965-15.317-3.185-22.909-1.22-7.32-2.711-14.843-4.405-22.366z"
        fill="#0C753E"
      />
      <path
        d="M151.484 138.434c-15.725 12.132-28.671 27.382-37.55 45.343-2.643 5.355-4.947 10.981-6.777 16.674-7.388 22.841-8.066 47.716-2.102 70.896.814 3.05 1.695 6.1 2.712 9.082.61-.135 1.22-.339 1.762-.474-.814-2.711-1.491-5.423-2.169-8.201a144.755 144.755 0 01-2.847-17.081 138.635 138.635 0 010-28.06c.204-2.169.475-4.338.814-6.506 1.762-11.862 4.812-24.062 9.963-34.906.678-1.424 1.423-2.779 2.169-4.135 5.558-9.489 11.251-18.842 18.436-27.314 4.744-5.558 9.963-10.709 15.724-15.318-.068.068-.135.068-.135 0z"
        fill="#0C512F"
      />
      <path
        d="M104.853 207.498c-.068-.203-.135-.339-.203-.542-.542-1.559-1.22-3.118-2.101-4.609-1.288-2.169-2.847-4.134-4.677-5.829-1.423-1.355-2.982-2.44-4.677-3.456-.61-.339-1.22-.746-1.897-1.017-.746-.339-1.288-.678-1.22.407.135 1.558.406 3.117.745 4.608 1.423 5.762 4.474 11.658 9.286 15.251 1.084.813 5.422 4.473 5.693 1.152.339-2.034-.339-4.067-.949-5.965zM115.494 179.304v-.474c0-1.424-.135-2.847-.407-4.338-.406-2.101-1.084-4.135-2.101-6.033-.745-1.491-1.762-2.846-2.779-4.134a24.343 24.343 0 00-1.22-1.356c-.542-.542-.881-.948-1.084-.067-.339 1.287-.542 2.575-.678 3.931-.542 5.083.339 10.709 3.186 15.047.61.948 3.118 5.151 4.27 2.575.745-1.559.813-3.389.813-5.151zM133.59 154.091c0-.136.068-.272.068-.407.203-1.152.271-2.305.203-3.457-.067-1.694-.339-3.389-.881-5.015-.406-1.288-1.016-2.44-1.694-3.593-.271-.406-.475-.813-.814-1.22-.339-.474-.542-.813-.881-.135a22.124 22.124 0 00-1.016 2.982c-1.017 3.931-1.085 8.404.61 12.2.406.813 1.83 4.406 3.05 2.576.881-1.153 1.152-2.576 1.355-3.931zM153.517 140.127c.136 0 .204-.067.339-.067.949-.204 1.83-.543 2.711-.949 1.288-.61 2.508-1.356 3.593-2.305.813-.745 1.559-1.559 2.169-2.44.203-.339.474-.678.677-1.016.272-.407.475-.678-.135-.678-.881 0-1.762.068-2.643.135-3.322.475-6.846 1.898-9.151 4.406-.542.542-2.846 2.847-.948 3.186 1.084.203 2.304-.068 3.388-.272zM112.782 193.537c.136-.136.272-.271.407-.339a25.223 25.223 0 014.067-2.779 22.77 22.77 0 017.049-2.372c1.965-.339 3.931-.407 5.896-.339.746.068 1.492.068 2.237.135.881.136 1.491.136.949 1.017-.813 1.288-1.762 2.44-2.779 3.525-3.931 4.134-9.489 7.455-15.657 7.862-1.355.068-7.116.745-5.896-2.237.745-1.83 2.304-3.185 3.727-4.473zM125.593 169.41l.407-.203c1.084-.678 2.304-1.22 3.524-1.627 1.83-.61 3.796-.881 5.761-.949 1.559 0 3.118.204 4.677.543.542.135 1.152.271 1.694.406.678.204 1.153.339.61.949-.813.881-1.694 1.695-2.643 2.373-3.592 2.711-8.404 4.541-13.284 3.998-1.085-.135-5.626-.338-4.27-2.507.813-1.356 2.168-2.169 3.524-2.983zM143.892 146.026c.135-.068.203-.068.339-.136.881-.407 1.83-.745 2.846-.949 1.491-.339 2.983-.406 4.541-.271 1.22.136 2.373.407 3.525.813.407.136.881.272 1.288.475.474.203.881.339.406.745a13.451 13.451 0 01-2.236 1.627c-2.983 1.83-6.846 2.779-10.506 2.033-.813-.203-4.338-.745-3.118-2.304.746-.949 1.83-1.491 2.915-2.033z"
        fill="#0C512F"
      />
      <path
        d="M28.265 252.303c6.98.475 14.233-2.236 19.858-6.235a29.227 29.227 0 004.203-3.457c.88-.881.203-1.017-.746-1.288-.813-.203-1.627-.339-2.44-.542-2.237-.339-4.406-.678-6.71-.542-2.914.135-5.829.61-8.54 1.559-1.898.61-3.66 1.423-5.355 2.372-.203.135-.406.203-.61.339-.338.203-.61.406-.948.542 3.524-6.981 6.439-14.233 8.607-21.689 1.424.068 3.254-.271 3.932-.407 5.964-1.016 11.386-4.744 15.318-9.218a29.61 29.61 0 002.778-3.727c.543-.881-.067-.881-.88-.881-.746 0-1.424 0-2.17.067-1.897.136-3.795.339-5.693.881a24.895 24.895 0 00-6.846 3.05c-1.423.882-2.779 1.966-3.998 3.118l-.407.407-.34.339c.61-2.508 1.153-5.084 1.56-7.591.949-5.423 1.491-10.913 1.694-16.335 1.22.068 3.39-1.22 4.067-1.627 4.541-2.507 7.862-7.116 9.76-11.861.474-1.22.881-2.508 1.22-3.795.203-.881-.271-.678-1.017-.475-.61.204-1.152.407-1.694.678-1.491.678-2.982 1.356-4.406 2.372-1.762 1.22-3.32 2.711-4.676 4.406-.882 1.152-1.695 2.372-2.373 3.66a3.286 3.286 0 00-.203.474 26.31 26.31 0 00-.61 1.356c0-9.218-1.084-18.3-3.05-27.179.949-.339 2.169-1.356 2.576-1.695 3.253-2.507 5.286-6.506 6.235-10.505.271-1.017.407-2.101.475-3.118.067-.746-.271-.542-.814-.271-.406.203-.88.474-1.288.745-1.084.678-2.168 1.424-3.117 2.373-1.22 1.152-2.305 2.507-3.118 3.999-.542 1.016-1.017 2.033-1.356 3.117-.067.136-.067.271-.135.407-.136.339-.204.678-.34 1.017-1.83-7.117-4.201-14.098-7.184-20.808.746-.475.068-2.644-.135-3.254-.881-3.321-3.321-6.167-6.032-8.133-.746-.542-1.491-.949-2.237-1.356-.542-.271-.474.068-.474.543 0 .406.067.813.135 1.22.203 1.084.407 2.169.813 3.185a15.512 15.512 0 002.102 3.728c.61.746 1.22 1.423 1.965 2.101a.937.937 0 00.271.204c.881.745 1.762 1.491 2.915 1.83.203.067.406.067.542.067 1.22 3.05 2.372 6.1 3.321 9.286-.271-.475-.678-.949-1.017-1.423-.067-.068-.135-.204-.203-.272-.61-.813-1.288-1.491-2.033-2.168-1.153-.949-2.44-1.763-3.864-2.305-1.152-.474-2.304-.745-3.524-.949-.475-.068-.881-.135-1.356-.203-.542-.068-.949-.136-.677.474a13.66 13.66 0 001.22 2.44c1.83 2.983 4.744 5.626 8.336 6.71.746.204 3.525 1.153 3.796-.067a117.006 117.006 0 011.83 6.981c1.49 6.71 2.304 13.42 2.847 20.198-.272-.61-.61-1.153-.95-1.695l-.203-.406c-.678-1.085-1.49-2.102-2.372-3.05-1.355-1.356-2.915-2.576-4.677-3.525-1.355-.745-2.846-1.22-4.405-1.694-.543-.136-1.152-.339-1.695-.407-.677-.136-1.152-.271-.949.542a27.727 27.727 0 001.22 3.321c1.966 4.067 5.355 7.93 9.896 9.76.746.339 3.321 1.491 4.473.881.204 2.915.34 5.829.475 8.744.068 1.559.068 3.118.068 4.677a87.19 87.19 0 01-1.017 10.234c-.203-.61-.407-1.22-.678-1.762-.068-.204-.135-.339-.203-.542-.61-1.492-1.356-2.983-2.305-4.338-1.355-2.034-3.117-3.864-5.083-5.355-1.559-1.22-3.321-2.169-5.083-3.05-.678-.339-1.356-.61-2.034-.881-.813-.339-1.423-.542-1.355.475.135 1.491.406 2.982.813 4.405 1.559 5.49 4.948 10.98 10.235 14.234.813.474 3.185 2.101 4.744 2.169-1.355 6.845-3.253 13.555-5.49 19.994-.678 1.83-1.356 3.66-2.033 5.422-.272-1.491-.746-2.914-1.288-4.27l-.203-.61a26.065 26.065 0 00-2.508-4.947c-1.491-2.305-3.254-4.474-5.355-6.304-1.626-1.423-3.389-2.575-5.286-3.592-.678-.339-1.356-.746-2.101-1.085-.882-.406-1.424-.677-1.356.475a31.312 31.312 0 001.017 5.015c1.762 6.304 5.422 12.675 10.844 16.471.746.542 3.05 2.304 4.677 2.575-3.118 7.252-6.846 14.166-11.116 20.808 0-1.491-.271-3.05-.542-4.473-.068-.204-.068-.475-.136-.678-.406-1.898-.948-3.796-1.694-5.626-1.084-2.711-2.643-5.219-4.473-7.455-1.424-1.763-3.118-3.254-4.813-4.677-.678-.474-1.288-1.017-1.965-1.491-.814-.542-1.356-.949-1.491.271-.136 1.83-.068 3.592.135 5.422.678 6.846 3.39 14.098 8.337 19.046.678.678 2.575 2.711 4.134 3.389-2.643 3.795-5.49 7.523-8.54 11.048-1.83 2.169-3.728 4.202-5.693 6.235.474.407.881.814 1.355 1.22A124.91 124.91 0 008 273.314c.61-.677 1.22-1.423 1.83-2.101 1.016 1.356 4.27 2.373 5.287 2.711 6.574 2.373 14.3 1.627 20.807-.677a40.52 40.52 0 004.948-2.169c1.085-.61.475-.881-.407-1.424-.745-.406-1.49-.813-2.236-1.152-2.034-.949-4.067-1.83-6.304-2.372a31.14 31.14 0 00-8.675-.813c-1.966.067-3.863.406-5.761.881-.204.068-.407.135-.678.135-1.356.339-2.779.746-4.067 1.288 4-5.015 7.66-10.302 10.912-15.928 1.356.475 3.728.542 4.61.61z"
        fill="#87CC1B"
      />
      <path
        d="M215.358 178.941c-8.602.169-17.204.675-25.721 1.35a435.909 435.909 0 0125.721 0c8.602.337 17.119.843 25.637 1.602a634.395 634.395 0 0125.468 3.036c8.434 1.265 16.951 2.614 25.3 4.132 8.433 1.603 16.782 3.205 25.216 5.06 8.348 1.855 16.782 3.626 24.962 5.735a337.627 337.627 0 0123.95 6.915c-2.024 1.855-5.06 3.036-7.59 3.795a194.573 194.573 0 01-19.565 4.807c1.012-1.518 2.024-2.952 3.205-4.385 1.771-2.193 3.542-4.386 5.987-5.819-5.987 2.783-11.384 6.746-15.938 11.469-13.072 2.277-26.312 3.373-39.552 3.373 1.771-2.024 3.71-3.963 5.65-5.734a141.234 141.234 0 0118.216-14.253c-11.048 5.651-21.589 12.313-31.372 19.903a344.18 344.18 0 01-13.324-.759 259.548 259.548 0 01-19.818-2.53c2.024-2.783 4.554-5.229 7.084-7.506a141.304 141.304 0 0118.215-14.252c-11.385 5.819-22.179 12.65-32.215 20.493-5.144-1.012-10.288-2.277-15.348-3.626 1.771-1.771 3.71-3.374 5.65-4.976 5.988-4.807 12.397-9.192 19.144-12.987-10.626 4.554-20.831 10.035-30.529 16.276-8.517-2.614-16.951-5.735-25.131-9.361.759-.59 1.434-1.265 2.193-1.855a126.654 126.654 0 0115.939-10.879c-7.422 3.205-14.674 6.915-21.589 11.132a175.06 175.06 0 01-6.916-3.374c-2.445-1.265-4.975-2.614-7.421-3.879.506-.422 1.096-.759 1.602-1.096 3.88-2.614 7.928-4.976 12.229-7-5.566 1.856-11.048 4.133-16.277 6.831-4.048-2.024-8.264-3.879-12.734-5.06-2.951-.759-5.65-1.518-8.686-1.265 2.867-3.036 7.759-5.228 11.385-7.337 5.481-3.12 11.216-5.987 16.951-8.602a158.63 158.63 0 0012.312 9.024c-3.626-3.12-7.168-6.409-10.373-9.867 1.687-.759 3.458-1.518 5.145-2.277a243.823 243.823 0 0117.035-6.493c5.566 5.313 11.385 10.372 17.541 15.011-5.144-4.976-10.036-10.373-14.421-16.023 5.06-1.603 10.204-3.036 15.349-4.217 7.252 8.18 15.095 15.77 23.613 22.601-5.398-5.566-10.373-11.469-14.843-17.794-1.349-1.94-2.699-3.879-3.795-5.903 3.373-.675 6.747-1.265 10.204-1.687 6.747 9.445 14.337 18.216 22.601 26.312-4.891-5.988-9.276-12.397-13.155-19.059-1.518-2.53-2.868-5.145-3.964-7.928 8.096-.843 16.276-.927 24.456-.337a220.153 220.153 0 0020.83 29.854c-4.722-7.253-8.854-14.843-12.312-22.77-.928-2.108-1.855-4.301-2.614-6.494 1.096.085 2.277.253 3.373.422a142.677 142.677 0 0128.926 7.337c5.397 10.204 11.638 19.902 18.553 29.095a159.333 159.333 0 01-11.301-23.192c-.421-1.18-.927-2.361-1.349-3.542 8.349 3.542 16.361 7.843 23.951 12.987a136.441 136.441 0 0010.457 19.228c-2.362-4.722-4.386-9.614-5.904-14.674l-.506-1.771c5.229 3.795 10.205 8.012 14.843 12.482 2.446 2.361 5.566 5.144 7.253 8.433a358.118 358.118 0 00-23.276-5.313c-8.518-1.687-17.035-3.036-25.553-4.47-8.517-1.349-17.035-2.614-25.553-3.71-8.517-1.097-17.119-2.024-25.721-2.868-8.602-.759-17.204-1.349-25.806-1.686-8.77-.085-17.372-.169-25.974-.085z"
        fill="#0C512F"
      />
      <path
        d="M240.152 132.895c-5.145-5.06-10.12-10.373-14.927-15.77a327.647 327.647 0 0015.686 14.927 437.195 437.195 0 0016.613 13.83c5.65 4.386 11.469 8.771 17.288 12.903 5.903 4.132 11.807 8.18 17.879 12.144 6.072 3.879 12.143 7.759 18.3 11.469 6.156 3.711 12.312 7.421 18.553 10.963 6.072 3.458 12.312 6.578 18.553 9.614-.169-2.277-1.349-4.807-2.446-6.662-2.783-4.891-5.903-9.614-9.108-14.252-.253 1.518-.506 2.952-.59 4.554-.169 2.361-.422 4.722.253 6.999-2.024-5.144-3.12-10.71-3.12-16.276-6.662-8.939-14.084-17.288-22.18-24.878-.084 2.277 0 4.554.169 6.747.422 6.493 1.434 12.903 2.867 19.228-3.457-9.783-6.072-19.987-7.674-30.276-2.783-2.53-5.65-4.891-8.602-7.252-4.385-3.458-8.939-6.831-13.577-9.867-.338 2.867-.253 5.819-.085 8.686.422 6.494 1.434 12.903 2.868 19.228-3.542-10.12-6.157-20.493-7.759-31.119-3.711-2.361-7.59-4.554-11.469-6.662.084 2.108.253 4.217.59 6.241.928 6.409 2.277 12.818 4.133 18.974-3.88-8.939-6.916-18.131-9.193-27.576-6.746-3.374-13.662-6.325-20.745-8.771.084.843.168 1.602.253 2.361a110.464 110.464 0 003.457 15.855c-2.699-6.241-4.975-12.65-6.746-19.228a173.394 173.394 0 00-6.157-1.94c-2.277-.674-4.554-1.264-6.746-1.939.084.506.253 1.096.337 1.602a72.992 72.992 0 003.458 11.301 114.546 114.546 0 01-5.988-13.578c-3.711-1.096-7.253-2.445-10.626-4.301-2.277-1.265-4.301-2.361-5.987-4.3 0 3.541 1.686 7.674 2.698 11.047 1.518 5.06 3.374 10.12 5.397 15.095 4.301.338 8.518.844 12.735 1.603a95.908 95.908 0 00-12.06 0c.59 1.433 1.181 2.951 1.855 4.385a173.292 173.292 0 006.663 13.83c6.493-.084 12.903.253 19.396.928-6.072.084-12.059.506-18.047 1.434 2.108 3.879 4.47 7.758 6.915 11.469 9.108-.843 18.3-.843 27.493-.169a124.374 124.374 0 00-19.312 2.277c-1.94.422-3.88.844-5.735 1.35 1.687 2.361 3.458 4.638 5.229 6.915a167.493 167.493 0 0129.01-3.036 123.528 123.528 0 00-19.059 4.048 53.319 53.319 0 00-7 2.53 124.134 124.134 0 0014.674 14.336c9.783-2.867 19.818-4.891 29.938-6.156a134.478 134.478 0 00-20.661 6.747c-1.856.759-3.627 1.518-5.398 2.445.759.591 1.518 1.181 2.362 1.687 6.831 4.891 14.167 8.939 21.926 12.228a191.004 191.004 0 0128.167-7c-7 2.024-13.746 4.554-20.324 7.59-.928.422-1.94.928-2.867 1.35 7.168 2.698 14.589 4.638 22.095 5.903a115.306 115.306 0 0117.541-5.735 79.083 79.083 0 00-12.144 5.566c-.422.253-.928.506-1.349.759a130.683 130.683 0 0016.276 1.012c2.867 0 6.409.085 9.276-.927-5.819-3.205-11.638-6.578-17.288-10.205-6.156-3.879-12.144-8.011-18.131-12.059-5.988-4.048-11.891-8.265-17.794-12.566-5.819-4.301-11.638-8.686-17.289-13.156a428.128 428.128 0 01-16.697-13.914c-5.566-4.554-10.879-9.53-16.023-14.59z"
        fill="#17844E"
      />
      <path
        d="M279.202 129.438a244.615 244.615 0 01-12.649-12.06c4.3 3.88 8.686 7.674 13.24 11.301 4.554 3.626 9.192 7.084 13.915 10.457 4.722 3.289 9.529 6.578 14.505 9.614 4.891 3.12 9.867 6.072 14.842 9.023 5.06 2.868 10.036 5.735 15.18 8.434 5.144 2.698 10.204 5.481 15.348 8.011 5.06 2.53 10.12 4.807 15.349 7-.253-1.856-1.265-3.795-2.193-5.313-2.445-3.795-5.144-7.506-7.927-11.048a26.168 26.168 0 00-.253 3.627c-.084 1.855-.084 3.795.506 5.566a35.884 35.884 0 01-3.204-12.903c-5.735-6.916-12.06-13.24-18.891-19.144 0 1.856.169 3.627.422 5.398.59 5.228 1.686 10.288 3.12 15.348-3.205-7.759-5.735-15.855-7.421-24.035a234.163 234.163 0 00-7.253-5.481 200.309 200.309 0 00-11.3-7.422c-.169 2.277 0 4.639.337 7 .675 5.229 1.687 10.289 3.12 15.349-3.289-7.928-5.819-16.277-7.59-24.71-3.12-1.687-6.24-3.373-9.445-4.891.085 1.686.422 3.373.759 5.06 1.012 5.144 2.361 10.204 4.132 15.095-3.457-6.999-6.324-14.336-8.601-21.842-5.566-2.445-11.217-4.469-17.036-6.24.085.674.253 1.265.338 1.939.843 4.301 1.939 8.518 3.457 12.65a112.587 112.587 0 01-6.24-15.18 55.748 55.748 0 00-5.06-1.265l-5.566-1.265c.084.422.253.844.337 1.265a66.392 66.392 0 003.205 8.939c-2.024-3.457-3.879-6.999-5.397-10.71-3.036-.759-5.988-1.686-8.771-3.036-1.855-.927-3.626-1.686-5.06-3.204.169 2.867 1.687 6.072 2.614 8.77 1.434 4.048 3.121 8.012 4.976 11.891 3.458.084 6.915.337 10.288.759-3.204 0-6.493.169-9.698.506.591 1.181 1.097 2.277 1.687 3.458 1.855 3.71 3.795 7.337 5.903 10.794 5.229-.337 10.373-.337 15.602-.084-4.892.337-9.699.928-14.421 1.94 1.855 3.036 3.879 6.072 6.072 8.939a138.128 138.128 0 0122.095-1.265c-5.229.506-10.373 1.349-15.433 2.614-1.518.422-3.036.843-4.554 1.349 1.434 1.856 2.952 3.627 4.47 5.398 7.59-1.856 15.348-3.121 23.191-3.627a92.707 92.707 0 00-15.095 4.048c-1.856.675-3.795 1.35-5.566 2.362 3.795 3.963 7.927 7.674 12.397 10.963a156.707 156.707 0 0123.781-6.241c-5.566 1.687-11.047 3.795-16.36 6.241-1.434.675-2.868 1.349-4.217 2.193.675.421 1.265.843 1.94 1.265 5.734 3.626 11.806 6.577 18.131 8.939a148.473 148.473 0 0122.348-6.831c-5.481 1.94-10.879 4.216-16.023 6.999-.759.422-1.518.844-2.192 1.265a93.997 93.997 0 0018.047 3.795c4.469-2.108 9.108-3.963 13.83-5.313-3.289 1.434-6.493 3.036-9.529 4.976-.338.253-.675.422-1.097.675 4.386.337 8.771.337 13.156.084 2.277-.169 5.144-.253 7.421-1.096-4.807-2.362-9.613-4.807-14.336-7.506-5.144-2.867-10.12-5.903-15.096-8.939a546.693 546.693 0 01-14.842-9.361 551.108 551.108 0 01-14.505-9.867 429.228 429.228 0 01-13.999-10.457c-4.386-3.373-8.855-7.168-13.241-10.963z"
        fill="#085E2F"
      />
      <path
        d="M276.754 90.392c-5.313-2.445-10.626-4.807-16.107-6.915 5.313 2.445 10.541 5.06 15.686 7.758 5.144 2.784 10.12 5.735 15.095 8.771 4.891 3.12 9.783 6.241 14.59 9.53 4.807 3.289 9.529 6.662 14.167 10.204a426.841 426.841 0 0113.747 10.71c4.554 3.626 9.108 7.253 13.493 11.048 4.301 3.626 8.433 7.505 12.481 11.384-1.771.506-3.964.338-5.735 0-4.469-.759-8.939-1.771-13.324-2.951 1.012-.591 2.108-1.181 3.289-1.687 1.687-.843 3.458-1.602 5.397-1.686-4.469-.085-8.939.59-13.156 2.108-8.602-2.614-17.035-5.903-25.046-9.951a61.641 61.641 0 015.144-1.771c5.06-1.434 10.204-2.53 15.348-3.205-8.433.084-16.866.928-25.131 2.614a147.241 147.241 0 01-7.927-4.554c-3.879-2.361-7.59-4.891-11.3-7.505 2.108-1.097 4.3-1.771 6.577-2.446 5.06-1.434 10.205-2.53 15.349-3.204a137.871 137.871 0 00-25.721 2.698c-2.783-2.193-5.566-4.469-8.181-6.831a52.353 52.353 0 014.892-1.265c5.144-1.096 10.288-1.855 15.601-2.108-7.843-.422-15.686-.253-23.529.675-4.385-4.133-8.602-8.602-12.397-13.24.675-.17 1.265-.338 1.94-.422a84.372 84.372 0 0112.987-1.771 107.067 107.067 0 00-16.444.253 135.726 135.726 0 01-3.205-4.132 597.138 597.138 0 00-3.373-4.639c.421-.084.843-.168 1.349-.168a59.64 59.64 0 019.529-.507c-3.963-.505-7.927-.843-11.975-.758-1.855-2.446-3.879-4.807-6.24-6.916-1.518-1.349-2.952-2.614-4.892-3.373 2.699-.928 6.241-.843 9.108-1.012 4.301-.253 8.602-.253 12.903-.084 1.434 3.12 3.036 6.24 4.723 9.192-1.265-2.952-2.446-6.072-3.374-9.192 1.265.084 2.53.084 3.795.168 4.133.253 8.265.59 12.313 1.18a153.57 153.57 0 006.072 14.422c-1.602-4.638-2.952-9.277-3.879-14.084 3.542.506 7.083 1.265 10.625 2.109a140.413 140.413 0 007.506 20.914c-1.602-4.975-2.783-10.12-3.626-15.264a44.783 44.783 0 01-.506-4.723c2.277.59 4.469 1.265 6.746 2.024a141.608 141.608 0 005.735 22.854c-1.096-5.144-1.855-10.288-2.193-15.517a35.627 35.627 0 010-5.987c5.145 1.94 10.204 4.3 15.011 7.168.506 8.18 1.771 16.36 3.627 24.372-.675-5.819-.844-11.722-.591-17.541.085-1.602.169-3.205.338-4.723.674.422 1.265.843 1.939 1.265 5.566 3.88 10.711 8.265 15.349 13.24.253 7.843 1.012 15.602 2.53 23.276-.422-5.819-.337-11.722.169-17.541l.252-2.53a97.493 97.493 0 0110.626 15.095 87.126 87.126 0 00.506 14.843c0-3.626.253-7.168.844-10.71.084-.422.168-.844.168-1.265a89.827 89.827 0 015.229 12.059c.759 2.193 1.855 4.807 1.855 7.337a288.132 288.132 0 00-12.481-10.288c-4.638-3.627-9.445-7-14.168-10.373-4.722-3.374-9.614-6.747-14.421-10.036-4.891-3.289-9.782-6.409-14.758-9.529a445.736 445.736 0 00-15.179-8.855c-5.229-2.867-10.458-5.482-15.771-8.012z"
        fill="#17844E"
      />
      <path
        d="M210.045 12.469c26.733 3.963 52.201 13.577 74.634 29.01a167.753 167.753 0 0119.143 15.348c23.866 22.264 41.154 51.359 49.503 82.899a152.684 152.684 0 012.783 12.65c-.843.169-1.602.422-2.445.675-.844-3.711-1.771-7.422-2.868-11.132-2.192-7.59-4.891-14.927-7.927-22.18a192.732 192.732 0 00-18.553-33.395c-1.687-2.446-3.458-4.807-5.229-7.168-9.951-12.988-21.673-25.385-34.913-34.914-1.687-1.265-3.542-2.361-5.313-3.458-12.903-7.59-25.89-15.01-39.974-20.324a156.164 156.164 0 00-28.757-7.843c-.169-.084-.084-.084-.084-.168z"
        fill="#17844E"
      />
      <path
        d="M335.784 95.536c0-.337 0-.59.084-.927a40.06 40.06 0 011.265-7.843c1.012-3.795 2.53-7.506 4.638-10.88 1.603-2.698 3.542-4.975 5.651-7.252.759-.843 1.602-1.686 2.445-2.361 1.012-.928 1.687-1.602 2.024.084.506 2.446.759 4.892.843 7.337.338 9.361-1.939 19.65-7.758 27.24-1.265 1.686-6.409 9.107-8.265 4.216-1.265-3.036-1.096-6.41-.927-9.614zM311.159 63.658c-.085-.253-.085-.506-.169-.759a31.086 31.086 0 01-.506-6.83c.084-3.374.59-6.832 1.687-10.036a36.715 36.715 0 013.289-7.169 62.034 62.034 0 011.518-2.445c.674-.928 1.096-1.687 1.686-.337.844 1.94 1.603 3.963 2.193 5.987 2.193 7.759 2.361 16.782-.928 24.288-.759 1.686-3.457 8.939-6.072 5.144-1.602-2.277-2.192-5.144-2.698-7.843zM279.87 37.262c-.085-.169-.253-.422-.338-.59-.927-1.687-1.771-3.458-2.361-5.398a29.717 29.717 0 01-1.518-8.602c-.084-2.277.169-4.47.59-6.746.169-.843.338-1.687.506-2.446.253-.927.422-1.686 1.265-.759a27.91 27.91 0 013.458 4.217c3.963 5.65 6.746 12.903 6.156 19.987-.084 1.602-.253 8.18-3.373 5.903-1.94-1.434-3.205-3.542-4.385-5.566zM241.582 19.215c-.084-.168-.253-.253-.337-.421-.928-1.265-1.855-2.53-2.53-3.88-1.096-2.024-1.855-4.3-2.277-6.578-.337-1.77-.422-3.542-.337-5.313 0-.674 0-1.349.084-2.024.084-.759.084-1.349.928-.759 1.18.844 2.192 1.856 3.204 2.868 3.795 3.963 6.831 9.36 7.337 14.927.085 1.264.759 6.493-1.939 5.06-1.687-.928-2.952-2.446-4.133-3.88zM208.694 15.757c-.169 0-.253.084-.422.084-1.265.338-2.53.59-3.795.675-1.939.169-3.879 0-5.734-.422-1.518-.337-2.868-.843-4.217-1.433-.506-.253-1.012-.422-1.518-.76-.59-.337-1.012-.505-.253-.927a19.571 19.571 0 013.289-1.518c4.301-1.687 9.361-2.277 13.831-.843 1.012.337 5.228 1.518 3.289 3.12-1.434 1.096-3.036 1.602-4.47 2.024zM336.625 115.608c-.253-.085-.59-.253-.843-.338-2.445-1.012-5.06-1.771-7.674-2.277a39.708 39.708 0 00-11.807-.506c-3.12.338-5.987 1.097-8.939 2.024-1.096.338-2.192.675-3.204 1.181-1.265.506-2.193.843-.759 1.855 1.939 1.434 4.047 2.783 6.24 3.88 8.349 4.3 18.553 6.662 27.914 4.722 2.108-.422 10.963-1.855 7.337-5.65-2.277-2.361-5.313-3.711-8.265-4.891zM317.904 83.813c-.253-.084-.59-.168-.843-.168-2.446-.506-4.976-.844-7.506-.928-3.795-.084-7.506.422-11.132 1.434-2.867.759-5.481 1.94-8.011 3.289-.928.506-1.94 1.012-2.783 1.602-1.097.675-1.856 1.096-.422 1.855 2.108 1.012 4.301 1.94 6.493 2.615 8.518 2.698 18.469 3.289 26.818 0 1.855-.76 9.951-3.458 5.988-6.41-2.615-1.855-5.735-2.614-8.602-3.289zM292.437 52.358c-.253-.085-.506-.085-.759-.169-2.193-.422-4.385-.675-6.662-.59a34.362 34.362 0 00-9.952 1.77c-2.529.844-4.891 2.193-7.252 3.543-.843.506-1.687 1.096-2.53 1.686-1.012.76-1.687 1.181-.506 1.856 1.771.927 3.711 1.686 5.65 2.36 7.421 2.362 16.192 2.531 23.782-1.011 1.687-.759 8.939-3.795 5.482-6.578-1.94-1.687-4.639-2.361-7.253-2.867zM261.317 32.118h-.59c-1.771 0-3.458.084-5.229.422-2.614.506-5.144 1.434-7.505 2.699-1.856 1.011-3.542 2.36-5.145 3.71-.59.506-1.18 1.096-1.771 1.602-.674.675-1.18 1.181-.084 1.518 1.518.506 3.12.844 4.723 1.097 6.072.843 12.987-.169 18.469-3.964 1.18-.843 6.493-4.132 3.457-5.819-2.024-1.096-4.301-1.18-6.325-1.265zM224.041 16.432h-.506a15.705 15.705 0 00-3.964.76c-1.939.59-3.795 1.517-5.566 2.698-1.349.927-2.53 2.108-3.71 3.289-.422.422-.843.928-1.265 1.434-.422.59-.843 1.012 0 1.18 1.181.253 2.446.422 3.711.422 4.722.169 9.951-1.18 13.83-4.554.843-.76 4.638-3.71 2.193-4.723-1.434-.674-3.121-.59-4.723-.506z"
        fill="#17844E"
      />
      <path
        d="M280.212 106.162a8.512 8.512 0 00-1.012 1.94c-1.096 2.53-1.686 5.566-.927 8.349.168.506.506 2.361 1.265 2.361a105.406 105.406 0 003.542 17.794c-.253-.169-.422-.422-.675-.59l-.253-.253a15.928 15.928 0 00-2.277-1.687c-1.181-.675-2.53-1.265-3.879-1.602-1.097-.253-2.108-.338-3.205-.422h-1.18c-.506 0-.844 0-.506.506.506.759 1.011 1.434 1.602 2.024 2.277 2.446 5.397 4.47 8.77 4.891.422.085 1.687.253 2.53.085a104.756 104.756 0 009.108 20.661c-.337-.253-.674-.421-1.012-.674-.084-.085-.253-.169-.337-.253a14.236 14.236 0 00-3.205-1.603c-1.686-.674-3.373-1.012-5.144-1.18-1.349-.085-2.699 0-4.132.168l-1.518.253c-.591.169-1.012.169-.506.759.759.844 1.602 1.518 2.445 2.193 3.289 2.614 7.59 4.469 11.891 4.385.675 0 2.699 0 3.542-.506 2.446 3.795 5.06 7.506 8.012 10.963a109.541 109.541 0 004.301 4.807c-.169 0-.253-.084-.422-.084-.169 0-.337-.084-.506-.084-1.349-.338-2.699-.506-4.132-.591-2.024-.084-4.133.169-6.156.675-1.603.422-3.036 1.012-4.47 1.771-.506.253-1.012.506-1.518.843-.59.338-1.012.591-.253 1.012 1.096.591 2.361 1.097 3.542 1.518 4.638 1.518 10.12 1.94 14.758.169.506-.169 2.024-.675 2.952-1.349a107.548 107.548 0 0015.095 11.89h-1.518c-1.602 0-3.204.169-4.807.506a26.9 26.9 0 00-6.746 2.446c-1.687.928-3.121 2.024-4.554 3.205-.506.421-1.012.927-1.518 1.349-.591.59-1.012 1.012 0 1.181 1.433.337 2.951.59 4.385.759 5.65.506 11.975-.506 16.698-3.795.59-.422 2.277-1.434 3.12-2.53a117.27 117.27 0 0014.337 6.831 22.705 22.705 0 00-3.458.759c-.169.084-.337.084-.506.168a22.448 22.448 0 00-4.47 1.771 25.995 25.995 0 00-5.819 4.133c-1.349 1.265-2.445 2.782-3.541 4.3-.338.591-.759 1.181-1.097 1.772-.421.759-.674 1.18.338 1.18 1.518 0 2.951-.169 4.469-.506 5.566-1.012 11.385-3.71 15.096-8.096.59-.674 2.53-2.783 2.614-4.132.759.253 1.434.506 2.193.759 2.445.759 4.975 1.518 7.59 2.108.168-.506.337-.927.421-1.433-2.277-.591-4.469-1.35-6.662-2.109a105.777 105.777 0 01-10.71-4.385c.843-1.181 1.349-3.373 1.518-4.132 1.518-5.566.337-11.891-1.94-17.035-.59-1.35-1.349-2.699-2.108-3.88-.591-.843-.759-.337-1.181.422-.337.59-.506 1.265-.759 1.94-.675 1.771-1.181 3.457-1.518 5.313-.337 2.361-.422 4.807-.084 7.168.253 1.602.59 3.204 1.096 4.722.084.169.084.338.169.506.421 1.181.843 2.362 1.433 3.458a114.68 114.68 0 01-16.529-10.204c1.012-.844 1.94-3.036 2.277-3.795 2.277-4.976 2.277-11.048.844-16.276-.338-1.35-.844-2.699-1.35-3.964-.421-.843-.674-.422-1.096.253-.422.506-.675 1.096-1.012 1.687-.843 1.518-1.687 3.036-2.277 4.722-.759 2.193-1.096 4.386-1.181 6.663-.084 1.518.085 3.036.338 4.554 0 .168.084.337.084.506.169 1.18.422 2.445.843 3.541-1.265-1.012-2.53-2.023-3.71-3.035a117.028 117.028 0 01-12.229-11.976c1.097-.674 2.109-2.867 2.53-3.542 2.446-4.469 2.53-9.782 1.434-14.336-.337-1.181-.675-2.361-1.265-3.458-.337-.759-.675-.337-1.096.253-.422.506-.759 1.012-1.096 1.518-.928 1.35-1.772 2.783-2.362 4.301-.759 1.94-1.265 3.964-1.433 5.988-.085 1.349 0 2.698.168 4.048 0 .168.084.337.084.421l.254 1.518a79.62 79.62 0 01-4.976-6.915c-.675-1.096-1.349-2.192-1.94-3.373-1.096-2.108-2.192-4.301-3.289-6.409 1.012-.085 2.362-1.94 2.783-2.53 2.446-3.205 3.289-7.337 3.036-11.048a15.623 15.623 0 00-.506-2.867c-.168-.675-.506-.338-.927 0l-1.012 1.012c-.928.927-1.771 1.939-2.446 3.036-.843 1.433-1.518 2.867-1.855 4.469-.253 1.012-.422 2.109-.422 3.121v1.939c-2.446-5.06-4.638-10.204-6.325-15.601-.59-1.855-1.096-3.795-1.602-5.735.759.759 2.277-1.096 2.783-1.518 2.192-2.192 3.12-5.313 3.204-8.18 0-.759 0-1.518-.168-2.277-.085-.506-.338-.337-.675-.084s-.59.421-.928.674c-.759.675-1.518 1.35-2.108 2.109a12.414 12.414 0 00-1.771 3.289c-.253.759-.506 1.602-.59 2.361v.253c-.085.506-.085.928-.085 1.434-.59-2.615-1.096-5.313-1.433-8.012.084 0 .253-.084.337-.253.675-.675 1.012-1.602 1.265-2.53 0-.084.084-.169.084-.253.253-.759.422-1.518.506-2.277.169-1.181.169-2.361-.084-3.542a13.38 13.38 0 00-.759-2.614c-.169-.338-.253-.591-.422-.928-.084-.169-.168-.422-.506 0z"
        fill="#46991A"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
