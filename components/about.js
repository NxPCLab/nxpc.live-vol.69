import styles from 'styles/about.module.css';

export default function About() {
    return (
        <>
            <div className={styles.title}>About</div>
            <div className={styles.text}>
                <p>NxPC.Labは、クラブやライブにおけるアーティストと観客の相互作用によってもたらされる場の臨場感を拡大し、ネットへも拡散させるためのメディアテクノロジーの実現を目指した研究機関です。現代のディア体験において必要とされる対話性、参加性をデバイス、インタフェース、ネットワークといったメディアテクノロジーを駆使することで、音楽体験を拡張し、音楽空間におけるコミュニケーションを次のステージへ導くための研究開発、イベントを実施しています。実験の場としてのイベントNxPC.Liveを中心に、レクチャーやワークショップ、ネットラジオなどの活動を行っています。</p>
            </div>
        </>
    );
}
