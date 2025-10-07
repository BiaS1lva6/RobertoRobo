export default function QRCodeDisplay({ size = 200 }) {
  // Simulating a QR code with a pattern
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-white p-3"
      style={{
        width: size,
        height: size,
        borderRadius: "15px",
        border: "3px solid #1F2937",
      }}
    >
      <svg width={size - 40} height={size - 40} viewBox="0 0 100 100">
        {/* QR Code pattern simulation */}
        <rect x="0" y="0" width="20" height="20" fill="black" />
        <rect x="25" y="0" width="5" height="5" fill="black" />
        <rect x="35" y="0" width="10" height="10" fill="black" />
        <rect x="50" y="0" width="5" height="5" fill="black" />
        <rect x="60" y="0" width="5" height="5" fill="black" />
        <rect x="80" y="0" width="20" height="20" fill="black" />

        <rect x="0" y="25" width="5" height="5" fill="black" />
        <rect x="10" y="25" width="5" height="5" fill="black" />
        <rect x="25" y="25" width="10" height="10" fill="black" />
        <rect x="40" y="25" width="5" height="5" fill="black" />
        <rect x="50" y="25" width="15" height="5" fill="black" />
        <rect x="80" y="25" width="5" height="5" fill="black" />
        <rect x="90" y="25" width="5" height="5" fill="black" />

        <rect x="0" y="35" width="5" height="10" fill="black" />
        <rect x="15" y="35" width="10" height="5" fill="black" />
        <rect x="30" y="35" width="5" height="5" fill="black" />
        <rect x="45" y="35" width="20" height="10" fill="black" />
        <rect x="70" y="35" width="5" height="5" fill="black" />
        <rect x="85" y="35" width="10" height="10" fill="black" />

        <rect x="5" y="50" width="10" height="5" fill="black" />
        <rect x="20" y="50" width="5" height="15" fill="black" />
        <rect x="30" y="50" width="10" height="5" fill="black" />
        <rect x="45" y="50" width="5" height="5" fill="black" />
        <rect x="55" y="50" width="10" height="10" fill="black" />
        <rect x="75" y="50" width="5" height="15" fill="black" />
        <rect x="85" y="50" width="10" height="5" fill="black" />

        <rect x="0" y="60" width="5" height="5" fill="black" />
        <rect x="10" y="60" width="5" height="10" fill="black" />
        <rect x="30" y="60" width="5" height="10" fill="black" />
        <rect x="40" y="60" width="10" height="5" fill="black" />
        <rect x="55" y="60" width="5" height="5" fill="black" />
        <rect x="85" y="60" width="5" height="10" fill="black" />

        <rect x="0" y="80" width="20" height="20" fill="black" />
        <rect x="25" y="80" width="5" height="5" fill="black" />
        <rect x="35" y="80" width="10" height="5" fill="black" />
        <rect x="50" y="80" width="15" height="10" fill="black" />
        <rect x="70" y="80" width="5" height="5" fill="black" />
        <rect x="80" y="80" width="20" height="20" fill="black" />

        {/* Corner markers */}
        <rect x="5" y="5" width="10" height="10" fill="white" />
        <rect x="85" y="5" width="10" height="10" fill="white" />
        <rect x="5" y="85" width="10" height="10" fill="white" />
      </svg>
    </div>
  )
}
