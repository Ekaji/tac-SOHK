/* eslint-disable react/jsx-key */
const Page = () => {
  return(
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily: "Georgia,serif"}}>
            <div className="font-sans">
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Interpol Provides EFCC With App To Track Terrorism Financing</h1>
                <p className="text-sm md:text-base font-normal text-gray-600">May 1, 2019 </p>
            </div>
            <div className="py-6 ">
            The International Criminal Police Organisation, (Interpol) has provided the Economic and Financial Crimes Commission, EFCC, with an application that will enhance intelligence sharing in the tracking of organised crimes, including money laundering and terrorism-financing.
            The Interpol, which receives billions of information yearly, will assist the anti-graft agency to set up a data base.

              The system will help to detect and interdict stolen and illicit funds by criminals.
              The application comprises a database to be supervised by the National Central Bureau, NCB, which is an interface between Interpol and national law enforcement agencies of countries through i24/7 Gemini Project global communications system.

              The application will be managed by its Information and Communications Technology Department.

              A statement on Tuesday, April 30, 2019, by the Acting Head of Media and Publicity, Mr. Tony Orilade, said the Acting Chairman of the Commission, Ibrahim Magu, witnessed the demonstration of the new application at the EFCC’s headquarters in Abuja.

              The statement said that Interpol’s Project Officer, Noha Amer, who led the delegation of the global police, disclosed that the United States (U.S.) was funding the project in four African countries.

              The countries are Nigeria, Niger, Mali and Libya.

              The statement added: “It is a move that aims to detect and interdict stolen and illicit funds by organised criminals, mainly in the area of terrorism-financing, such as in the manner that it happened in Libya.

              “She explained that the project will see to the training of the Commission’s operatives on programmes that include Interpol policing capabilities and standard operations.

              “The training will commence after the installation of the NCB database.”

              According to Amer, the NCB plays an integral role and was at the heart of Interpol in terms of information gathering and sharing.

              She said: “NCB is the cornerstone of the Interpol in liaising with the law enforcement agencies of other countries, especially in terms of cross-border investigation, operations and arrest.

              “NCB serves as a tool for timely dissemination of information. The Interpol will equip the NCB with the necessary equipment to go with i247 extensions. The i24/7 accommodates IT database.”

              Christophe Nakobyan, Interpol’s Project Officer II, also explained that the i247 platform as a closed group for law enforcement agencies is a safer form of connectivity than Yahoo and Whatsapp.

              He said the platform gives access to information sharing, with optimal level of security.

              Noting the dangers law enforcement agencies face from hackers, he disclosed: “We have 10,000 attacks by hackers per day but at the moment it is very safe as no hacker has been successful.”

              He said the Interpol receives over five billion requests in a year in the database for information.

              Nakobyan said: “The database will further advance countries’ cooperation to the extent that it will allow each organisation to share information.

              “The information shared will be strictly owned by the sharing commission which will be at liberty to decide what kind of information to share whom to share with and which service to render to other law enforcement agencies.”

              Other members of the delegation were: Eleyatt Nahah, an ACP with Interpol, Sylvester Uzoefuna Jnr, C Udendi, Emmanuel Handan, Akubo Jerry and Chuks Nwaogbo.
            </div>
        </div>

        {/* <hr className="border-b-2 border-gray-400 mb-8 mx-4"/>

        <div className="font-sans flex justify-between content-center px-4 pb-12">
            <div className="text-left">
                <span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span>
                <br/>
                <>
                  {previous && (
                        <Link className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"  to={ `/blog/${previous.slug.toLowerCase().trimStart().replace(/\s/g, '-')}/` } rel="prev">
                            {previous.slug}
                        </Link>
                    )}
                </>
            </div>
            <div className="text-right">
                <span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span>
                <br/>
                <>
                  {next && (
                        <Link className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline" to={ `/blog/${next.slug.toLowerCase().trimStart().replace(/\s/g, '-')}/`} rel="next">
                            {next.slug}
                        </Link>
                    )}
                </>
            </div>
        </div> */}
    </div>
</div>
  )
}

export default Page