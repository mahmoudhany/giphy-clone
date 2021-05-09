export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center position-absolute"
      style={{
        left: '50%',
        bottom: 0
      }}
    >
      <div className="spinner-border d-block text-success" role="status">
      </div>
    </div>
  )
}
