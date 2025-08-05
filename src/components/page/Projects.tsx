const Projects = ()=>{
    return(
        <>
            <main>
                <section className="info-box gradient-1">
                    <div className="info-image">
                        <img src="portfolio/managemate.png" alt="img1" />
                    </div>
                    <div className="info-text">
                        <h3>Managemate <a className="app-link" target="_blank" href="https://panel.managemate.pl">Go  <span className="material-symbols-outlined">arrow_right_alt</span></a></h3>
                        <p>
                            Web application created by 3-person team (I am project owner and full-stack developer) 
                            in ASP.NET, Angular and PostgreSQL database. 
                            Main target of the program is helping companies which 
                            buissness profile focus on lease and/or sale of construction site related 
                            tools / scaffoldings / forms. It allows user to register their warehouses, 
                            clients, company workers, products and track its quantity, 
                            movement within created "orders" and finally issue invoices for each month.
                        </p>
                    </div>
                </section>

                <section className="info-divider">
                    <div>
                        <span>Angular</span>
                    </div>
                    <div>
                        <span>ASP.NET</span>
                    </div>
                    <div>
                        <span>PostgreSQL</span>
                    </div>
                    <div>
                        <span>Ubuntu</span>
                    </div>
                </section>

                <section className="info-box gradient-2">
                    <div className="info-text">
                        <h3>Kebabook</h3>
                        <p>
                            Application written in HTML, CSS and PHP - 
                            it lets users to add places where they ate kebabs to 
                            database (with rating and exact latitude and longitude got 
                            from Google Map). Later they can look for the best "kebab place" 
                            based on applied filters or the nearest one. There is also a 
                            subsite with all of registered places displayed in a table
                        </p>
                    </div>
                    <div className="info-image">
                        <img src="portfolio/kebabook.png" alt="img1" />
                    </div>
                </section>
                
                <section className="info-divider">
                    <div>
                        <span>HTML</span>
                    </div>
                    <div>
                        <span>CSS</span>
                    </div>
                    <div>
                        <span>PHP</span>
                    </div>
                    <div>
                        <span>MariaDB</span>
                    </div>
                </section>
                
                <section className="info-box gradient-1">
                    <div className="info-image">
                        <img src="portfolio/trainaton.png" alt="img1" />
                    </div>
                    <div className="info-text">
                        <h3>Trainaton</h3>
                        <p>
                            Web application written mostly in PHP - 
                            it is used to post information about trains delay. 
                            App allows users to share their opinion about trains, 
                            train drivers and train companies under posted delays.
                            First registered account is nominated to administrator 
                            who can manage created accounts, edit all of the posts and 
                            comments below them. Adminstrator also can change the application 
                            logo and main page description. Basic users can only share 
                            their thoughts under the posts. 
                        </p>
                    </div>
                </section>
                
                <section className="info-divider">
                    <div>
                        <span>PHP</span>
                    </div>
                    <div>
                        <span>MariaDB</span>
                    </div>
                    <div>
                        <span>HTML</span>
                    </div>
                    <div>
                        <span>CSS</span>
                    </div>
                </section>
                
                <section className="info-box gradient-2">
                    <div className="info-text">
                        <h3>Pong</h3>
                        <p>
                            This is a simple browser game which is rendered using canvas. 
                            It has 5-step speed scale so the user can choose difficulty level based 
                            on their skills. After clicking the Pong button the game starts and render a 
                            ball and an obstacle in a random place to avoid repeating scenarios. 
                            Then user have to move their mouse to change position of a plate used 
                            to bounce the ball.
                        </p>
                    </div>
                    <div className="info-image">
                        <img src="portfolio/pong.png" alt="img1" />
                    </div>
                </section>

                <section className="info-divider">
                    <div>
                        <span>HTML</span>
                    </div>
                    <div>
                        <span>JS</span>
                    </div>
                </section>

                <section className="info-box gradient-1">
                    <div className="info-image">
                        <img src="portfolio/unity.png" alt="img1" />
                    </div>
                    <div className="info-text">
                        <h3>Unity platform game</h3>
                        <p>
                            Created in Unity (C#) simple platform game with 2 
                            stages. It has features such as checkpoints, 
                            dollars collection, pause menu and selecting 
                            difficulty level. Main character and its animations 
                            were drawn using GIMP.
                        </p>
                    </div>
                </section>

                <section className="info-divider">
                    <div>
                        <span>Unity</span>
                    </div>
                    <div>
                        <span>GIMP</span>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Projects;