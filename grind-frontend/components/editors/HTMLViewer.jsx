const HtmlViewer = ({ content, ellipsis = 0 }) => {
    if(ellipsis) {
      content = content.replace(/(<([^>]+)>)/gi, "")?.substring(0, ellipsis)?.trim() + " ..."
    }
    
    return (
        <div className="ck-content"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      );
}
export default HtmlViewer;