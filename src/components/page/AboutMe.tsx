const AboutMe = () =>{
    return(
        <>
            <main>
                <section className="about-me-head">
                    <div>
                        <div>
                            <span className="material-symbols-outlined">person</span>
                        </div>
                        <div>
                            <p>
                                Hi! I'm <b>Miłosz Bugiel</b>
                            </p>
                            <p>
                                I really like working in IT, especially in programming sector. 
                                My main stack to develop applications is ASP.NET with Angular, 
                                which I later deploy on Linux server. 
                                Of course life isn't only about work, so apart of an IT I'm 
                                interested in automotive, PC/laptops hardware and doing sports 
                                - for instance cycling. Below you can find short info about my skills.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="skill-section">
                    <div>
                        <h2>TECHNICAL SKILLS</h2>
                        <span className="circle"></span>
                        <span className="vertical-line"></span>
                        <span className="circle"></span>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Programming</td>
                                    <td>
                                        <ul>

                                            <li>
                                                basic knowledge: C++, Java
                                            </li>
                                            <li>
                                                good knowledge: C#, TypeScript, HTML, CSS, JavaScript, PHP, SQL
                                            </li>
                                            <li>
                                                good knowledge of frameworks: ASP.NET Core Web API, Angular
                                            </li>
                                            <li>
                                                using database systems: MySQL, PostgreSQL
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        IT
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                managing operating systems: Windows (Server), Linux (Server)
                                            </li>
                                            <li>
                                                using MS Office
                                            </li>
                                            <li>
                                                using programming tools: MS Visual Studio, MS Visual Studio Code, Notepad++, Unity, XAMPP
                                            </li>
                                            <li>
                                                using graphic editors: GIMP, Inkscape, Blender
                                            </li>
                                            <li>
                                                using diagnostic tools: HWINFO64, HD Tune, CrystalDiskInfo
                                            </li>
                                            <li>
                                                using programs: Cisco Packet Tracer, WinSCP, FileZilla Client
                                            </li>
                                            <li>
                                                configuring WWW, DHCP and DNS servers on Linux and Windows Server
                                            </li>
                                        </ul>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        Hardware
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                building and configuring network infrastructure
                                            </li>
                                            <li>
                                                basic knowledge of PC components construction
                                            </li>
                                            <li>
                                                building and servicing PCs
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>           
                
                <section className="skill-section">
                    <div>
                        <h2>OTHER SKILLS</h2>
                        <span className="circle"></span>
                        <span className="vertical-line"></span>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Languages
                                    </td>
                                    <td>
                                        <ul>
                                            <li>English - mid-advanced (B2/B2+)</li>
                                        </ul>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        Other
                                    </td>
                                    <td>
                                        <ul>
                                            <li>organizing and planning work</li>
                                            <li>responsibility for making decisions and solving problems</li>
                                            <li>openness to professional development and expanding qualifications</li>
                                            <li>availability</li>
                                            <li>creativity</li>
                                            <li>ability to work independently and in a team</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>           
            </main>
        </>
    )
}

export default AboutMe;