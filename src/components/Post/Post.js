function Post(props) {
    const { titulo, img } = props;
    return(
        <div className="post">
            <h1 className="titulo">{titulo}</h1>
            <img src={img} alt="Hyperlink" />
        </div>
    )
}

export default Post