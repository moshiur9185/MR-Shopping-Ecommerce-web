import React from 'react';
import image from '../image/dirla9ri9.jpg'

const Review = () => {
    return (
        <div className=" container-fluid my-5">
            <div className="text-center my-5">
                <h4 className="fw-bold">Customer Review</h4>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <figure class="bg-slate-100 rounded-xl p-3 dark:bg-slate-800">
                    <img class="w-24 border-2 border-orange-500 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
                    <div class="pt-3 md:p-3 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-md text-white font-medium">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus magnam nihil maxime! Accusantium natus.”
                            </p>
                        </blockquote>
                        <figcaption class="font-medium inline-block align-text-bottom">
                            <div class="text-sky-300 dark:text-sky-500">
                                Sarah Dayan
                            </div>
                            <div class="text-slate-500 dark:text-slate-350">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
                </figure>
                
                <figure class="bg-slate-100 rounded-xl p-3 dark:bg-slate-800">
                    <img class="w-24 h-24 border-2 border-orange-500 rounded-full mx-auto " src={image} alt="" width="384" height="512" />
                    <div class="pt-3 md:p-3 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-md text-white font-medium">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus magnam nihil maxime! Accusantium natus.”
                            </p>
                        </blockquote>
                        <figcaption class="font-medium inline-block align-text-bottom">
                            <div class="text-sky-500 dark:text-sky-400">
                                Sarah Dayan
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
                                Staff Engineer, Algolia
                            </div>
                        </figcaption>
                    </div>
                </figure>


                <figure class="bg-slate-100 rounded-xl p-3 dark:bg-slate-800 " >
                    <img class="w-24 h-24 border-2 border-orange-500 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
                    <div class="pt-3 md:p-3 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-md text-white font-medium">
                                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus magnam nihil maxime! Accusantium natus.”
                            </p>
                        </blockquote>
                        <figcaption class="font-medium inline-block align-text-bottom">
                            <div class="text-sky-500 dark:text-sky-400">
                                Sarah Dayan
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
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