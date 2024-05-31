function adjustLayout() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var aboutText = document.querySelector('.about_text');
    var aboutSection = document.querySelector('.about_section');

    if (width <= 660) {
        aboutText.innerHTML = `
            NxPC.Labは、クラブやライブにおけるアーティストと観客の相互作用によって</br>
            もたらされる場の臨場感を拡大し、ネットへも拡散させるための</br>
            メディアテクノロジーの実現を目指した研究機関です。<br /><br />
            現代のディア体験において必要とされる対話性と参加性を</br>
            デバイス、インタフェース、ネットワークといった<br />
            メディアテクノロジーを駆使することで、音楽体験を拡張し、</br>
            音楽空間におけるコミュニケーションを<br />
            次のステージへ導くための研究開発、イベントを実施しています。<br /><br />
            実験の場としてのイベントNxPC.Liveを中心に、<br />
            レクチャーやワークショップ、ネットラジオなどの活動を行っています。`;
        aboutSection.style.textAlign = 'center';
    } else {
        aboutText.innerHTML = `
        NxPC.Labは、クラブやライブにおけるアーティストと観客の相互作用によってもたらされる場の臨場感を拡大し、<br />
        ネットへも拡散させるためのメディアテクノロジーの実現を目指した研究機関です。<br /><br />
        現代のディア体験において必要とされる対話性、参加性をデバイス、インタフェース、ネットワークといった<br />
        メディアテクノロジーを駆使することで、音楽体験を拡張し、音楽空間におけるコミュニケーションを<br />
        次のステージへ導くための研究開発、イベントを実施しています。<br /><br />
        実験の場としてのイベントNxPC.Liveを中心に、<br />
        レクチャーやワークショップ、ネットラジオなどの活動を行っています.`;
        aboutSection.style.textAlign = 'center';
    }
}

window.onload = adjustLayout;
window.onresize = adjustLayout;