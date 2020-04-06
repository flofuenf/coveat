import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import withStyles from "@material-ui/core/styles/withStyles";

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
            <Typography variant={"h2"}>Datenschutzerklärung</Typography>
            <Divider style={{marginTop: 15, marginBottom: 15, height: 2}}/>
            <Typography variant={"h4"}>Allgemeiner Hinweis und Pflichtinformationen</Typography>

            <Typography variant={"h6"} className={classes.header}>Benennung der verantwortlichen Stelle</Typography>
            <Typography variant={"body1"}>Name der Firma</Typography>
            <Typography variant={"body1"}>Ansprechpartner</Typography>
            <Typography variant={"body1"}>Straße und Hausnummer</Typography>
            <Typography variant={"body1"}>PLZ Ort</Typography>
            <br/>
            <Typography variant={"body1"}>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über
                die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o.
                Ä.).</Typography>

            <Typography variant={"h6"} className={classes.header}>Widerruf Ihrer Einwilligung zur
                Datenverarbeitung</Typography>
            <Typography variant={"body1"}>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
                Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für
                den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
                erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</Typography>

            <Typography variant={"h6"} className={classes.header}>Recht auf Datenübertragbarkeit</Typography>
            <Typography variant={"body1"}>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder
                in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
                Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten
                an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
                ist.</Typography>

            <Typography variant={"h6"} className={classes.header}>Recht auf Auskunft, Berichtigung, Sperrung,
                Löschung</Typography>
            <Typography variant={"body1"} style={{marginBottom: 40}}>Sie haben jederzeit im Rahmen der geltenden
                gesetzlichen Bestimmungen das
                Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten,
                deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder
                Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können
                Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</Typography>

            <Divider/>

            <Typography variant={"h6"} className={classes.header}>SSL- bzw. TLS-Verschlüsselung</Typography>
            <Typography variant={"body1"}>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte,
                die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit
                sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine
                verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der
                Browserzeile.</Typography>

            <Typography variant={"h6"} className={classes.header}>Server-Log-Dateien</Typography>
            <Typography variant={"body1"}>In Server-Log-Dateien erhebt und speichert der Provider der Website
                automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:

                Besuchte Seite auf unserer Domain
                Datum und Uhrzeit der Serveranfrage
                Browsertyp und Browserversion
                Verwendetes Betriebssystem
                Referrer URL
                Hostname des zugreifenden Rechners
                IP-Adresse
                Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der
                Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
                Vertrags oder vorvertraglicher Maßnahmen gestattet.</Typography>

            <Typography variant={"h6"} className={classes.header}>Google Analytics</Typography>
            <Typography variant={"body1"}>Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics.
                Anbieter des Webanalysedienstes ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043,
                USA.</Typography>
            <br/>
            <Typography variant={"body1"}>Google Analytics verwendet "Cookies." Das sind kleine Textdateien, die Ihr
                Webbrowser auf Ihrem Endgerät
                speichert und eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über
                Ihre Benutzung unserer Website werden an einen Server von Google übermittelt und dort gespeichert.
                Server-Standort ist im Regelfall die USA.</Typography>
            <br/>
            <Typography variant={"body1"}>Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs.
                1 lit. f DSGVO. Als
                Betreiber dieser Website haben wir ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um
                unser Webangebot und ggf. auch Werbung zu optimieren.</Typography>
            <br/>
            <Typography variant={"body1"}>Google Analytics verwendet "Cookies." Das sind kleine Textdateien, die Ihr
                Webbrowser auf Ihrem Endgerät
                speichert und eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über
                Ihre Benutzung unserer Website werden an einen Server von Google übermittelt und dort gespeichert.
                Server-Standort ist im Regelfall die USA.

                Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als
                Betreiber dieser Website haben wir ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um
                unser Webangebot und ggf. auch Werbung zu optimieren.</Typography>
            <br/>
            <Typography variant={"subtitle1"}>IP-Anonymisierung</Typography>
            <br/>
            <Typography variant={"body1"}>Wir setzen Google Analytics in Verbindung mit der Funktion IP-Anonymisierung
                ein. Sie gewährleistet,
                dass Google Ihre IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA
                kürzt. Es kann Ausnahmefälle geben, in denen Google die volle IP-Adresse an einen Server in den USA
                überträgt und dort kürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung
                der Website auszuwerten, um Reports über Websiteaktivitäten zu erstellen und um weitere mit der
                Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Es findet
                keine Zusammenführung der von Google Analytics übermittelten IP-Adresse mit anderen Daten von Google
                statt.</Typography>
            <br/>
            <Typography variant={"subtitle1"}>Browser Plugin</Typography>
            <br/>
            <Typography variant={"body1"}>Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige
                Funktionen unserer Website
                könnten dadurch jedoch eingeschränkt werden. Ebenso können Sie die Erfassung von Daten bezüglich Ihrer
                Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender Verarbeitung durch Google
                unterbinden. Dies ist möglich, indem Sie das über folgenden Link erreichbare Browser-Plugin
                herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.</Typography>
            <br/>
            <Typography variant={"subtitle1"}>Widerspruch gegen die Datenerfassung</Typography>
            <br/>
            <Typography variant={"body1"}>Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem
                Sie auf folgenden Link
                klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen
                unserer Website verhindert: Google Analytics deaktivieren.</Typography>
            <br/>
            <Typography variant={"body1"}>Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der
                Datenschutzerklärung von
                Google: https://support.google.com/analytics/answer/6004245?hl=de.</Typography>
            <br/>
            <Typography variant={"subtitle1"}>Auftragsverarbeitung</Typography>
            <br/>
            <Typography variant={"body1"}>Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben wir mit
                Google einen Vertrag über
                die Auftragsverarbeitung abgeschlossen.</Typography>

            <Typography variant={"h6"} className={classes.header}>Google Web Fonts</Typography>
            <Typography variant={"body1"}>Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google Inc.,
                1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</Typography>
            <br/>
            <Typography variant={"body1"}>
                Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns gewünschte Darstellung unserer
                Website zu präsentieren, unabhängig davon welche Schriften Ihnen lokal zur Verfügung stehen. Dies
                erfolgt über den Abruf der Google Web Fonts von einem Server von Google in den USA und der damit
                verbundenen Weitergabe Ihre Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite
                Sie bei uns besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
                f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der optimalen Darstellung
                und Übertragung unseres Webauftritts.
            </Typography>
            <br/>
            <Typography variant={"body1"}>Das Unternehmen Google ist für das us-europäische Datenschutzübereinkommen
                "Privacy Shield"
                zertifiziert. Dieses Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden
                Datenschutzniveaus gewährleisten.</Typography>
            <br/>
            <Typography variant={"body1"}>Einzelheiten über Google Web Fonts finden Sie unter:
                https://www.google.com/fonts#AboutPlace:about und
                weitere Informationen in den Datenschutzbestimmungen von Google:
                https://policies.google.com/privacy/partners?hl=de</Typography>
            <br/>
            <Typography variant={"body2"}>Quelle: Datenschutz-Konfigurator von
                mein-datenschutzbeauftragter.de</Typography>
        </Centered>
    );
})