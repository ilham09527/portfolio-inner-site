import React, { useRef, useState, useEffect } from 'react';

// gambar tools
import alightMotion from '/videos/alightmotion.png';

type VideoItemProps = {
    id: string;
    src: string;
    activeVideoId: string | null;
    setActiveVideoId: (id: string | null) => void;
};

const VideoItem: React.FC<VideoItemProps> = ({
    id,
    src,
    activeVideoId,
    setActiveVideoId,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    // auto pause kalau bukan video aktif
    useEffect(() => {
        if (activeVideoId !== id && videoRef.current) {
            videoRef.current.pause();
        }
    }, [activeVideoId, id]);

    return (
        <div style={styles.videoWrapper}>
            <video
                ref={videoRef}
                controls
                preload="metadata"
                style={styles.video}
                onPlay={() => setActiveVideoId(id)}
            >
                <source src={src} type="video/mp4" />
                Browser lu gak support video tag.
            </video>
        </div>
    );
};

const VideoEditor: React.FC = () => {
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    return (
        <div className="site-page-content">
            <h1>Video Editing</h1>
            <h3>Motion & Short-form Content</h3>

            <br />

            <div className="text-block">
                <p>
                    Short-form video edits focused on timing, rhythm, and motion.
                    Each clip is presented in a gallery-style player for simple
                    and intuitive playback.
                </p>
            </div>

            <br />

            <h2>Editing Tool</h2>
            <div className="captioned-image">
                <img src={alightMotion} style={styles.toolLogo} alt="Alight Motion" />
            </div>

            <br />

            <h2>Video Gallery</h2>
            <br />

            <VideoItem
                id="video-1"
                src="public/videos/project1.mp4"
                activeVideoId={activeVideoId}
                setActiveVideoId={setActiveVideoId}
            />

            <VideoItem
                id="video-2"
                src="public/videos/project2.mp4"
                activeVideoId={activeVideoId}
                setActiveVideoId={setActiveVideoId}
            />
        </div>
    );
};

const styles: any = {
    toolLogo: {
        width: 140,
        margin: '0 auto',
        display: 'block',
    },

    videoWrapper: {
        backgroundColor: '#f8f9fb',
        padding: 16,
        borderRadius: 12,
        marginBottom: 32,
        border: '1px solid rgba(0,0,0,0.04)',
        boxShadow:
            '0 4px 12px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.04)',
    },

    video: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#000',
    },
};

export default VideoEditor;
