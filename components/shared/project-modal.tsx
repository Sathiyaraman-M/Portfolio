import Image from "next/image";

interface Props {
    id: string;
    title: string;
    content: any;
    image: string;
    githubLink: string;
    demoLink: string;
}
const ProjectModal = (props: Props) => (
    <div className="portfolio-modal modal fade" id={props.id} tabIndex={-1} aria-labelledby={props.id}
         aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header border-0">
                    <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{props.title}</h2>
                            <div className="divider-custom">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                <div className="divider-custom-line"></div>
                            </div>
                            <img className="rounded mb-3" style={{height: '300px', objectFit: 'contain',width:'auto !important'}} src={props.image} alt="..."/>
                            <div className="mb-3">{props.content}</div>
                            <div className="d-flex justify-content-center" >
                                {props.githubLink !== '#' &&
                                    <a href={props.githubLink} className="btn btn-primary mx-1 align-items-center" target="_blank" rel="noreferrer">
                                        <i className="fas fa-fw fa-brands fa-github me-1"></i>
                                        Open in GitHub
                                    </a>
                                }
                                {props.demoLink !== '#' &&
                                    <a href={props.demoLink} className="btn btn-primary mx-1 align-items-center" target="_blank" rel="noreferrer">
                                        <i className="fas fa-fw fa-up-right-from-square me-1"></i>
                                        Open Demo
                                    </a>
                                }
                                <button className="btn btn-secondary mx-1 align-items-center" data-bs-dismiss="modal">
                                    <i className="fas fa-xmark fa-fw me-1"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProjectModal;