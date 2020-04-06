import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";

const Centered = styled.div`
  text-align: center;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const styles = theme => ({
    header: {
        marginTop: 40,
        marginBottom: 14,
    }
});

export default withStyles(styles)(function About(props) {
    const {classes} = props;
    return (
        <Centered>
            <Typography variant={"h2"}>Impressum</Typography>
            <Divider style={{marginTop: 15, marginBottom: 35, height: 2}}/>

            <Typography variant={"h6"} className={classes.header}>Betreiber der Webseite</Typography>
            <Typography variant={"body1"}>Name der Firma</Typography>
            <Typography variant={"body1"}>Ansprechpartner</Typography>
            <Typography variant={"body1"}>Straße und Hausnummer</Typography>
            <Typography variant={"body1"}>PLZ Ort</Typography>
            <Typography variant={"h6"} className={classes.header}>Haftungsausschluss - Disclaimer:</Typography>
            <Typography variant={"subtitle1"}>Haftung für Inhalte</Typography>
            <br/>
            <Typography variant={"body1"}>Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach
                bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
                jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt.
            </Typography>
            <br/>
            <Typography variant={"body1"}>Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g.
                Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
            </Typography>
            <br/>

            <Typography variant={"subtitle1"}>Haftungsbeschränkung für externe Links</Typography>
            <br/>
            <Typography variant={"body1"}>Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte
                dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die
                „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen
                Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.
            </Typography>
            <br/>
            <Typography variant={"body1"}>
                Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und
                waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche
                Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei
                direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres
                Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen,
                wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung
                im Falle rechtswidriger Inhalte zu verhindern.
            </Typography>
            <br/>
            <Typography variant={"body1"}>Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen
                Internetauftrittes „Name Ihrer Domain“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern,
                Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für
                Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet
                allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf
                die jeweilige Veröffentlichung lediglich verweist.
            </Typography>
            <br/>
            <Typography variant={"body1"}>Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns
                unverzüglich entfernt.
            </Typography>
            <br/>

            <Typography variant={"subtitle1"}>Urheberrecht</Typography>
            <br/>
            <Typography variant={"body1"}>
                Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen <a
                href={"http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf"}>Urheberrecht</a>. Die
                Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des
                Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des
                jeweiligen Urhebers i.S.d. <a
                href={"http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf"}>Urhebergesetzes</a>. Downloads
                und Kopien dieser Seite sind
                nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite
                nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden
                als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Inhalte unverzüglich entfernen.
            </Typography>
        </Centered>
    );
})