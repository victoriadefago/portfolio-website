
export default function ContactForm() {

    console.log(process.env.API_KEY)
  return (
    <div>
        <form action="https://api.web3forms.com/submit" method="POST" className="form rounded-lg bg-[#F1F1F1] p-4 flex flex-col">
            <input type="hidden" name="access_key" value="6a1e5c11-6cec-4e74-8bd1-898e00106242" />

            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
            {" "}
            Your Name
            </label>
            <input type="text" name="name" className="font-light rounded-md border bg-white focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500" required />
            
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
            Email
            </label>
            <input type="email" name="email" className="font-light rounded-md border bg-white focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500" required />
            
            <label
            htmlFor="message"
            className="text-sm text-gray-600 mx-4 mt-4"
            >
            Message
            </label>
            <textarea name="message" rows="4" className="text-gray-600 font-light rounded-md border bg-white  py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500" required></textarea>

            <button type="submit" className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold">Send Message</button>

        </form>
        <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>

  )
}





