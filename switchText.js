function adjustLayout() {
  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var aboutText = document.querySelector(".about_text");
  var aboutSection = document.querySelector(".about_section");

  if (width <= 650) {
    aboutText.innerHTML = `
            NxPC.Labは、クラブやライブにおけるアーティスト<br>
            と観客の相互作用によってもたらされる場の臨場感<br>
            を拡大しネットへも拡散させるためのメディアテク<br>
            ノロジーの実現を目指した研究機関です。<br><br>

            現代のディア体験において必要とされる対話性と参<br>
            加性をデバイス、インタフェース、ネットワークと<br>
            いったメディアテクノロジーを駆使することで、音<br>
            楽体験を拡張し音楽空間におけるコミュニケーショ<br>
            ンを次のステージへ導くための研究開発、イベント<br>
            を実施しています。<br><br>

            実験の場としてのイベントNxPC.Liveを中心に、レ<br>
            クチャーやワークショップ、ネットラジオなどの<br>
            活動を行っています。`;
    aboutSection.style.textAlign = "left";
  } else if (width <= 1050) {
    aboutText.innerHTML = `
            NxPC.Labは、クラブやライブにおけるアーティストと観客の相互作用によって<br>
            もたらされる場の臨場感を拡大し、ネットへも拡散させるためのメディアテク<br>
            ノロジーの実現を目指した研究機関です。<br><br>

            現代のディア体験において必要とされる対話性と参加性をデバイス、インタフ<br>
            ェース、ネットワークといったメディアテクノロジーを駆使することで、音楽<br>
            体験を拡張し、音楽空間におけるコミュニケーションを次のステージへ導くた<br>
            めの研究開発、イベントを実施しています。実験の場としてのイベントNxPC.L<br>
            iveを中心に、レクチャーやワークショップ、ネットラジオなどの活動を行って<br>
            います。`;
    aboutSection.style.textAlign = "left";
  } else {
    aboutText.innerHTML = `
        NxPC.Labは、クラブやライブにおけるアーティストと観客の相互作用によってもた<br>
        らされる場の臨場感を拡大し、ネットへも拡散させるためのメディアテクノロジー<br>
        の実現を目指した研究機関です。<br><br>

        現代のディア体験において必要とされる対話性、参加性をデバイス、インタフェー<br>
        ス、ネットワークといったメディアテクノロジーを駆使することで、音楽体験を拡<br>
        張し、音楽空間におけるコミュニケーションを次のステージへ導くための研究開発、<br>
        イベントを実施しています。<br><br>

        実験の場としてのイベントNxPC.Liveを中心に、レクチャーやワークショップ、ネッ<br>
        トラジオなどの活動を行っています.`;
    aboutSection.style.textAlign = "left";
  }
}

window.onload = adjustLayout;
window.onresize = adjustLayout;
