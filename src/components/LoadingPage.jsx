function LoadingPage({id}) {
  
  return (
    <div id={id} className = "loadingOverlayContainer">
      <div class="spinner-loader spinner-border m-5" role="status"></div>  
    </div>
  )
}

export default LoadingPage
