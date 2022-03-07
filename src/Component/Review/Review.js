import React from 'react';
import image from '../image/dirla9ri9.jpg'

const Review = () => {
    return (
        <div className=" container my-5">
            <div className="text-center my-5">
                <h4 className="fw-bold">Customer Review</h4>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <figure className="bg-sky-100 rounded p-3 dark:bg-sky-700">
                    <img className="w-24 border-2 border-orange-500 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
                    <div className="pt-3 md:p-3 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-md text-white font-medium">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus magnam nihil maxime! Accusantium natus.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium inline-block align-text-bottom">
                            <div className="text-white rounded dark:bg-slate-800">
                                Sarah Dayan
                            </div>
                            <div className="text-slate-100 dark:text-slate-900">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
                </figure>
                
                <figure className="bg-sky-100 rounded p-3 dark:bg-sky-700">
                    <img className="w-24 border-2 border-orange-500 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
                    <div className="pt-3 md:p-3 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-md text-white font-medium">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus magnam nihil maxime! Accusantium natus.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium inline-block align-text-bottom">
                            <div className="text-white rounded dark:bg-slate-800">
                                Sarah Dayan
                            </div>
                            <div className="text-slate-100 dark:text-slate-900">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
                </figure>


                <figure className="bg-sky-100 rounded p-3 dark:bg-sky-700">
                    <img className="w-24 border-2 border-orange-500 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
                    <div className="pt-3 md:p-3 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-md text-white font-medium">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus magnam nihil maxime! Accusantium natus.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium inline-block align-text-bottom">
                            <div className="text-white rounded dark:bg-slate-800">
                                Sarah Dayan
                            </div>
                            <div className="text-slate-100 dark:text-slate-900">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>

        </div>
    );
};

export default Review;