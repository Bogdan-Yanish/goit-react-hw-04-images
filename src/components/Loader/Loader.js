import React from "react";
import ContentLoader from "react-content-loader";

const ImageLoader = () => {
  return (
    
    <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 1200 600"
    backgroundColor="#b4a7a7"
    foregroundColor="#eae6e6"
    
  >
    <rect x="3" y="35" rx="2" ry="2" width="123" height="143" /> 
    <rect x="168" y="35" rx="2" ry="2" width="123" height="143" /> 
    <rect x="327" y="36" rx="2" ry="2" width="123" height="143" /> 
    <rect x="487" y="37" rx="2" ry="2" width="123" height="143" /> 
    <rect x="3" y="197" rx="2" ry="2" width="123" height="143" /> 
    <rect x="3" y="356" rx="2" ry="2" width="123" height="143" /> 
    <rect x="168" y="357" rx="2" ry="2" width="123" height="143" /> 
    <rect x="327" y="197" rx="2" ry="2" width="123" height="143" /> 
    <rect x="168" y="197" rx="2" ry="2" width="123" height="143" /> 
    <rect x="486" y="197" rx="2" ry="2" width="123" height="143" /> 
    <rect x="488" y="358" rx="2" ry="2" width="123" height="143" /> 
    <rect x="327" y="358" rx="2" ry="2" width="123" height="143" />
  
    </ContentLoader>
  )
}

export default ImageLoader;