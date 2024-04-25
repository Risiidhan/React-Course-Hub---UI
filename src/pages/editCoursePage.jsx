import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const EditCoursePage = ({ submitCourse }) => {

    const course = useLoaderData();
    const [type, setType] = useState(course.type)
    const [title, setTitle] = useState(course.title)
    const [description, setDescription] = useState(course.description)
    const [location, setLocation] = useState(course.location)
    const [price, setPrice] = useState(course.price)
    const [name, setName] = useState(course.instructor.name)
    const [bio, setBio] = useState(course.instructor.bio)
    const [contactEmail, setContactEmail] = useState(course.instructor.contactEmail)
    const id = course.id;
    const nav = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();

        const updatedCourse = {
            id,
            title,
            type,
            description,
            location,
            price,
            instructor: {
                name,
                bio,
                contactEmail
            }
        }

        let res = submitCourse(updatedCourse);
        toast.success('Course Updated Successfully');
        nav(`/course/${id}`);
    }
    return (
        <>
            <section className="bg-red-50">
                <div className="container m-auto max-w-2xl py-24">
                    <div
                        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                    >
                        <form onSubmit={submitForm}>
                            <h2 className="text-3xl text-center font-semibold mb-6">Edit Course</h2>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                >Course Type</label
                                >
                                <select
                                    id="type"
                                    name="type"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="">Select Course</option>
                                    <option value="Online Course">Online Course</option>
                                    <option value="In-Person Workshop">In-Person Workshop</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2"
                                >Course Listing Name</label
                                >
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    placeholder="eg. React Fundamental 2024"
                                    required
                                    value={title}
                                    onInput={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-gray-700 font-bold mb-2"
                                >Description</label
                                >
                                <textarea
                                    id="description"
                                    name="description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="Add any course desciption"
                                    value={description}
                                    onInput={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                                >Price</label
                                >
                                <input
                                    type='text'
                                    id='price'
                                    name='price'
                                    className='border rounded w-full py-2 px-3 mb-2'
                                    placeholder='Instructor Price'
                                    required
                                    value={price}
                                    onInput={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            <div className='mb-4'>
                                <label className='block text-gray-700 font-bold mb-2'>
                                    Location
                                </label>
                                <input
                                    type='text'
                                    id='location'
                                    name='location'
                                    className='border rounded w-full py-2 px-3 mb-2'
                                    placeholder='Instructor Location'
                                    required
                                    value={location}
                                    onInput={(e) => setLocation(e.target.value)}
                                />
                            </div>

                            <h3 className="text-2xl mb-5">Instructor Info</h3>

                            <div className="mb-4">
                                <label htmlFor="instructor" className="block text-gray-700 font-bold mb-2"
                                >Instructor Name
                                </label>
                                <input
                                    type="text"
                                    id="instructor"
                                    name="instructor"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Instructor Name"
                                    value={name}
                                    onInput={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="instructor_description"
                                    className="block text-gray-700 font-bold mb-2"
                                >Instructor Description</label
                                >
                                <textarea
                                    id="instructor_description"
                                    name="instructor_description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="What does your instructor do?"
                                    value={bio}
                                    onInput={(e) => setBio(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="contact_email"
                                    className="block text-gray-700 font-bold mb-2"
                                >Contact Email</label
                                >
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Email address for applicants"
                                    required
                                    value={contactEmail}
                                    onInput={(e) => setContactEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Edit Course
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}


export default EditCoursePage;