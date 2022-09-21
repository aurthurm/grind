const HtmlViewer = ({ content }) => {
    return (
        <div className="ck-content"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      );
}
export default HtmlViewer;