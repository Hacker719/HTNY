import Navbar from "../components/Navbar";
import Head from "next/head";
export default class Layout extends React.Component {
    render() {
        return(
            <div>
                <Head>
                    <title>Hack The New Year! 🎉</title>
                </Head>
                <Navbar/>
                {this.props.children}
                <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Turret+Road:700|Nunito+Sans&display=swap');
                html,body {
                    font-family: 'Nunito Sans', sans-serif;
                    height:100%;
                    width:100%;
                    margin:0;
                    background-color:#2a0188;
                }
                .navContainer {
                    width: 100vw;
                    background-color:#2a0188;
                    margin:0;
                    height:60px;
                    display:flex;
                    flex-direction:row;
                    -moz-box-shadow:    3px 3px 5px 6px ;
                    -webkit-box-shadow: 3px 3px 5px 6px ;
                    box-shadow:         3px 3px 5px 6px ;
                    z-index:2;
                    position: fixed;
                    top:0;
                }
                .item {
                    margin:auto
                    height:100%;
                    width:100%;
                    display:flex;
                }
                .item :hover {
                    background-color:#3e2675;
                    cursor:pointer;
                }
                .item a {
                    color:white;
                    margin:auto
                }
                .sidebar {
                    width:30vw;
                    flex-direction:row;
                    display:flex;
                }
                a {
                    text-decoration:none;
                }
                .hero {
                    top:0;
                    position: fixed;
                    height: 100vh;
                    display:flex;
                    color:white;
                    overflow: hidden;
                    position: absolute;
                    width:100vw;
                    flex-direction:row !important;
                }
                .hero-norm {
                    height: calc(100vh-50px);
                    display:flex;
                    color:white;
                    width:100vw;
                    flex-direction:row !important;
                }
                .overlay {
                    clip-path: polygon(100% 0, 100% 87%, 0 100%, 0 100%, 0 0);
                    background-image: url("https://files.slack.com/files-pri/T0266FRGM-FNHEDK43V/flat-design-fireworks.jpg");
                    z-index:0;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height:100vh;
                    width:110vw;
                    position: absolute;
                    filter: blur(5px);
                        -webkit-filter: blur(5px);
                        -moz-filter: blur(5px);
                        -o-filter: blur(5px);
                        -ms-filter: blur(5px);
                    margin: 0vh -2vw -2vh -2vw;
                }
                .titleImage {
                    z-index:1;
                    margin:auto;
                    width:20vw;
                }
                .logo {
                    width:15vw;
                }
                .content {
                    z-index:1;
                    margin:auto;
                    display: flex;
                    flex-direction:column;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                    margin-top:20vh;
                    text-align:center;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                }
                .title {
                    font-family: 'Turret Road', cursive;
                    font-size:4em;
                    margin-bottom:10px;
                }
                .subtitle {
                    margin-top:10px;
                    font-size:1.3em;
                }
                .hero p {
                    max-width:40vw;
                    margin:auto;
                }
                `}</style>
            </div>
        )
    }
}