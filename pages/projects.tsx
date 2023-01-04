import PageHeader from '../components/shared/page-header'
import Modals from "../components/modals";
import Image from "next/image";
const Projects = () => (
    <>
        <PageHeader pageTitle={"Projects"} />
        <section className="page-section portfolio">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#sports-store">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src="/portfolio/sports-store.png" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#endurance">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src="/portfolio/endurance.png" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#fluid">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src="/portfolio/genesis.png" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#resurgence">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src="/portfolio/resurgence.png" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#genesis">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src="/portfolio/genesis.png" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item img-thumbnail mx-auto" data-bs-toggle="modal" data-bs-target="#infinite">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" style={{height:'220px', objectFit: 'contain', backgroundColor:'#222'}} src="/portfolio/novel-infinite.png" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Modals />
    </>
)

export default Projects;