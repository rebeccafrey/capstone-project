import React from 'react'
import styled from 'styled-components/macro'
import Divider from '../ui/Divider'

export default function About() {
  return (
    <>
      <main>
        <IntroStyled>
          Hier findest du alle Informationen, die du brauchst, um zu starten -
          oder tiefer einzusteigen...
        </IntroStyled>
        <Divider />
        <h1 id="why">Warum eigentlich?</h1>
        <LinkStyled>
          Direkt zu: <a href="#sources">Neugierig geworden?</a>
        </LinkStyled>
        <h3>Die Gesellschaft...</h3>
        <p>
          Hast du dich auch schon mal gefragt, ob du anders bist als andere?
          Dich über das Verhalten von deinem Gegenüber gewundert? Dich ein wenig
          fehl am Platz gefühlt, weil zu viele Menschen um dich waren, oder die
          Stille deines Gegenübers nicht gut ausgehalten? Die mündlichen
          Bewertungen in der Schule nicht verstanden, oder die schriftlichen
          Prüfungen als große Challenge wahrgenommen?
        </p>
        <h3>Meine Situation...</h3>
        <p>
          Ich selbst gehöre zu den stillen Menschen: Ich bin gern für mich.
          Schreibe lieber, als dass ich rede. Liebe es, mich mit nur einer
          Person zu unterhalten (aber dann so richtig), und werde in Gruppen von
          mehr als drei Personen sehr still.
        </p>
        <p>
          Das bedeutete mangelnde mündliche Beteiligung in der Schule. Immer
          wieder gesagt zu bekommen "da musst du mehr aus dir rausgehen." Und
          auch wenig hilfreiches 'Verständnis zeigen' ("mir fällt das auch
          schwer, aber ich habe das gelernt...").
        </p>
        <h3>Mein Aha-Moment...</h3>
        <p>
          Wir sind so verschieden - und ob man eher Intro oder Extro ist, ist
          angeboren und entsprechend nicht einfach so zu ändern. Unsere Gehirne
          funktionieren unterschiedlich. (Spoiler: und das ist gut so!)
        </p>
        <p>
          Mein Aha-Moment kam, als ich verstand, wo ich mich im Spektrum von
          Introvertiertheit und Extravertiertheit bewege. Und als ich merkte,
          dass meine ausgeprägte introvertierte Persönlichkeit Stärken
          beinhaltet, die sehr extravertierte Menschen nicht haben. (Andersrum
          gilt dies natürlich genauso.)
        </p>
        <h3>Meine Mission...</h3>
        <p>
          Ich bin der Meinung, dass ich das viel zu spät rausgefunden habe.
          Deswegen möchte ich anderen hier die Möglichkeit geben, mehr über sich
          herauszufinden. Einen kleinen Test zu machen. Und vor allem möchte ich
          den Austausch fördern, um ein besseres Verständnis zu entwickeln: Wo
          unsere Challenges liegen. Wie wir die Gesellschaft sehen. Und vor
          allem: wie wir uns ergänzen können.
        </p>
        <NameStyled>- Becca</NameStyled>
        <Divider />
        <AnchorStyled id="sources" />
        <h2>Neugierig geworden?</h2>
        <h3>Willst du mehr erfahren?</h3>
        <p>Hier findest du weiterführende Quellen.</p>
        <SmallPrint>
          (Das sind meine persönlichen Empfehlungen, keine Werbung, keine
          Bezahlung, kein Affiliate, kein nichts. Bilde dir deine eigene
          Meinung.)
        </SmallPrint>
        <h3>Bücher</h3>
        <ul>
          <li>
            Über Schiffe und U-Boote im Gemeinde-Kontext: <br />
            <a
              href="https://www.amazon.de/Die-leisen-Weltver%C3%A4nderer-introvertierter-Christen/dp/3775158286/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=debora+sommer&qid=1589447299&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Debora Sommer :: Die leisen Weltveränderer
            </a>
          </li>
          <li>
            Der Klassiker: <br />
            <a
              href="https://www.amazon.de/Still-Kraft-Introvertierten-Susan-Cain/dp/3442157641/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=AYHUIQA1AV8L&dchild=1&keywords=still+susan+cain&qid=1589447457&sprefix=still+susain+%2Caps%2C196&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Susain Cain :: Still
            </a>
          </li>
          <li>
            Um auch als leiser Mensch mehr Präsenz zu finden:
            <br />
            <a
              href="https://www.amazon.de/Leise-Menschen-starke-Wirkung-Pr%C3%A4senz/dp/3492306993/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=KIVZK510MM56&dchild=1&keywords=l%C3%B6hken+sylvia&qid=1589447502&sprefix=l%C3%B6hke%2Caps%2C168&sr=8-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Susan Löhken :: Leise Menschen - starke Wirkung
            </a>
          </li>
        </ul>
        <h3>Podcasts</h3>
        <ul>
          <li>
            Vanilla Mind <br />
            <a
              href="https://vanilla-mind.de/podcast/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Still & Stark
            </a>
          </li>
          <li>
            Die Lösung – der Psychologie-Podcast von PULS <br />
            <a
              href="https://www.br.de/mediathek/podcast/die-loesung-der-psychologie-podcast-von-puls/introvertiert/1663322"
              target="_blank"
              rel="noopener noreferrer"
            >
              Introvertiert (einzelne Folge)
            </a>
          </li>
        </ul>
      </main>
    </>
  )
}

const IntroStyled = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 24px;
`
const SmallPrint = styled.p`
  font-size: 14px;
  font-style: italic;
`
const LinkStyled = styled.p`
  margin: 0 0 24px 12px;
  padding-top: 0;
  font-size: 16px;
`
const AnchorStyled = styled.div`
  margin: -100px;
`
const NameStyled = styled.p`
  text-align: right;
  font-style: italic;
`
