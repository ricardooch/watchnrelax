interface YoutubeEmbedProps {
    YoutubeUrl: string
}

const YoutubeEmbed = ({YoutubeUrl} : YoutubeEmbedProps) => {

    return (
        <iframe className="w-full h-full"
            src={`https://www.youtube.com/embed/${YoutubeUrl}`}
            title=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
            allowFullScreen
        >
        </iframe>
    )
}

export default YoutubeEmbed;