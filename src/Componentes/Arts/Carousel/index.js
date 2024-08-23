import React, { useState } from 'react';
import './CarouselBS4.css';
import { Modal } from 'react-bootstrap';

const CarouselBS4 = ({ title, description, images }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleImageClick = (image) => {
        setModalImage(image);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <div>
            <div className='textoArtsComponente  container'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <div className='carouselConfigGlobal'>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">{images.map((_, index) => (
                            <li
                                key={index}
                                data-target="#carouselExampleCaptions"
                                data-slide-to={index}
                                className={index === 0 ? "active" : ""}
                            ></li>
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                            >
                                <img
                                    src={image.src}
                                    className="d-block w-80 mx-auto"
                                    alt={image.alt}
                                    onClick={() => handleImageClick(image.src)}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{image.label}</h5>
                                    <p>{image.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Body className='d-flex justify-content-center align-items-center'>
                        <img src={modalImage} alt="Full screen" className="img-fluid" />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default CarouselBS4;
