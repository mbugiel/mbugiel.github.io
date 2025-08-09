import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form"


const Contact = ()=>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<{email:string, message:string}>()
    const onSubmit: SubmitHandler<{email:string, message:string}> = (data) => {
        console.log(data);
        setClicked(true);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, message:data.message })
        };

        fetch('https://managemate.pl/api/send', requestOptions)
            .then(() => {
                alert("Message sent!");
                setSend(false);
            })
            .catch(err => {
                console.log(err)
                setClicked(false);
            });
    }

    const [showSend, setSend] = useState(true);
    const [clicked, setClicked] = useState(false);

    console.log(watch("email")) // watch input value by passing the name of it



    let button;
    if(showSend && !clicked){
        button = <input type="submit" value="Send"/>;
    }else if(!showSend && clicked){
        button=<input disabled type="button" value="Message already sent"/>;
    }else{
        button=<input disabled type="button" value="Sending..."/>;
    }


    return(
        <>
            <main>
                <section className="contact-box">
                    <section className="contact-panel grow">
                        <div className="message-symbols-container">
                            <span className="material-symbols-outlined message-symbol">keyboard</span>
                            <span className="circle"></span>
                            <span className="horizonatal-line"></span>
                        </div>
                    </section>

                    <section className="contact-panel">
                        <h1>Get in touch</h1>
                        <p>
                            Looking for developer for your team? Need more information about me? Send a message
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email">Your E-mail</label>
                            <input id="email" type="text" {...register("email", 
                                {
                                    required: "E-mail field is required", 
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Email is not valid"
                                    }
                                })} 
                            />
                            {
                                errors.email &&
                                <div>
                                    {errors.email.message}
                                </div>
                            }

                            <label htmlFor="message">Message</label>
                            <textarea id="message" {...register("message", {required: "Message field is required"})}/>
                            {
                                errors.message &&
                                <div>
                                    {errors.message.message}
                                </div>
                            }
                            
                            {button}
                        </form>
                    </section>
                    
                    <section className="contact-panel grow">
                        <div className="message-symbols-container">
                            <span className="horizonatal-line"></span>
                            <span className="circle"></span>
                            <span className="material-symbols-outlined message-symbol">mail</span>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Contact;