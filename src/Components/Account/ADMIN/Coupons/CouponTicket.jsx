import React, { useEffect } from 'react';

const CouponTicket = ({
                          couponCode = 'XXXX',
                          couponName = 'Super Coupon',
                          percentage = '0%',
                          expirationDate = 'N/A',
                          onImageGenerated // New prop to pass the base64 image back
                      }) => {
    useEffect(() => {
        // Create SVG element
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "300");
        svg.setAttribute("height", "200");
        svg.setAttribute("viewBox", "0 0 300 200");

        // Create SVG content
        svg.innerHTML = `
      <rect 
        x="10" 
        y="10" 
        width="280" 
        height="180" 
        rx="15" 
        ry="15" 
        fill="#f0f0f0" 
        stroke="#00328f" 
        stroke-width="3"
      />
      <path 
        d="M10 100 Q150 90, 290 100" 
        fill="none" 
        stroke="#00328f" 
        stroke-dasharray="5,5"
      />
      <text 
        x="150" 
        y="60" 
        text-anchor="middle" 
        font-size="24" 
        font-weight="bold" 
        fill="#00328f"
      >
        ${couponName}
      </text>
      <text 
        x="150" 
        y="90" 
        text-anchor="middle" 
        font-size="36" 
        font-weight="bold" 
        fill="#00328f"
      >
        ${percentage}% OFF
      </text>
      <text 
        x="150" 
        y="130" 
        text-anchor="middle" 
        font-size="18" 
        fill="#333"
      >
        Coupon Code: ${couponCode}
      </text>
      <text 
        x="150" 
        y="160" 
        text-anchor="middle" 
        font-size="14" 
        fill="#666"
      >
        Expires: ${expirationDate}
      </text>
      <circle cx="30" cy="100" r="10" fill="#00328f" />
      <circle cx="270" cy="100" r="10" fill="#00328f" />
    `;

        // Convert SVG to base64
        const svgString = new XMLSerializer().serializeToString(svg);
        const base64Image = `data:image/svg+xml;base64,${btoa(svgString)}`;

        // Call the callback with the base64 image
        if (onImageGenerated) {
            onImageGenerated(base64Image);
        }
    }, [couponCode, couponName, percentage, expirationDate, onImageGenerated]);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 200"
            className="w-full h-full"
        >
            <rect
                x="10"
                y="10"
                width="280"
                height="180"
                rx="15"
                ry="15"
                fill="#f0f0f0"
                stroke="#00328f"
                strokeWidth="3"
            />
            <path
                d="M10 100 Q150 90, 290 100"
                fill="none"
                stroke="#00328f"
                strokeDasharray="5,5"
            />
            <text
                x="150"
                y="60"
                textAnchor="middle"
                fontSize="24"
                fontWeight="bold"
                fill="#00328f"
            >
                {couponName}
            </text>
            <text
                x="150"
                y="90"
                textAnchor="middle"
                fontSize="36"
                fontWeight="bold"
                fill="#00328f"
            >
                {percentage}% OFF
            </text>
            <text
                x="150"
                y="130"
                textAnchor="middle"
                fontSize="18"
                fill="#333"
            >
                Coupon Code: {couponCode}
            </text>
            <text
                x="150"
                y="160"
                textAnchor="middle"
                fontSize="14"
                fill="#666"
            >
                Expires: {expirationDate}
            </text>
            <circle cx="30" cy="100" r="10" fill="#00328f" />
            <circle cx="270" cy="100" r="10" fill="#00328f" />
        </svg>
    );
};

export default CouponTicket;