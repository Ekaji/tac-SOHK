/* eslint-disable react/jsx-key */
const Page = () => {
  return(
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily: "Georgia,serif"}}>
            <div className="font-sans">
                <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Interpol Provides EFCC With App To Track Terrorism Financing</h1>
                <p className="text-sm md:text-base font-normal text-gray-600">Aug 26, 2021 </p>
            </div>
            <div className="py-6 ">
            Technology Against Crime in Africa (TAC Africa), an organization connecting law enforcement, subject matter experts, and civil society to solve issues that affect the African society using technology is thrilled to announce our partnership with Silicon Valley Accelerator GSDLabs. The Accelerator was founded by GSD Venture Studios, a Silicon Valley-based firm, led by CEO Gary Fowler and COO Derek Distenfield. Gary and Derek travel the world to locate and cultivate promising startups locked out of Silicon Valley due to political, social, and cultural dynamics. GSD has long-standing ties in the African tech space and has accelerated several promising African startups as a result of Derek’s travels to the region. 

            TAC Africa and GSD Venture Studios have joined together to assemble a fund to stimulate growth in the African security space by investing in talented founders who historically haven’t had the same opportunities for success. Investments will focus on Drones, Cybersecurity/Defense, AI, Robotics, Blockchain, and Technology for Social Good.

            <header>
            “We see tremendous potential for the development and growth of the security space in Africa and Beyond. We couldn’t be more excited to partner with TAC Africa and be one piece of the puzzle to their success” - Derek Distenfield. 

            </header>

            This partnership brings together TAC Africa’s local and general security expertise and bolsters the wealth of tech knowledge within the GSDLabs Accelerator program. Together, this fund will create a unique opportunity to accelerate African entrepreneurial communities, produce rewarding jobs, and advance the field of security in Africa and beyond. 


            To catalyze these synergies, the fund will establish a novel, collaborative venture capital (VC) model to tap into the inherent value of this newly formed coalition, promote more inclusive entrepreneurship, and produce top-tier returns for our investors. 

            <header>
            “TAC Africa is wholly committed to developing the African security space. We recognize the importance of nurturing entrepreneurs who can launch disruptive, successful ventures in areas ripe for innovation. We are confident that African security entrepreneurs will have the tools to guarantee success with GSD’s proven venture building formula.” - Jerry Akubo, CEO and Founder of TAC Africa.
            </header>

            TAC Africa, powered by GSD, is organizing a first-of-its-kind $1m+ investment vehicle to deliver significant capital appreciation by investing in extraordinary African startup companies. GSD Venture Studios’ Robust global partnerships and opportunities give it the unique ability to drive growth and expose founders to opportunities otherwise missed. 
            </div>

            <header>
            “We travel the world investing in resilient teams bold enough to #GoGlobal. For too long, self-motivated entrepreneurs have struggled to navigate the minefield and challenges of launching a global company. The next generation of African innovation is set to emerge, and GSD is positioned to energize Africa’s immense tech talent and expose them to our global network in conjunction with TAC Africa.” - Gary Fowler, CEO, President, and Co-founder of GSD Venture Studios.

            </header>

            The fund is optimistic that it can recruit a diverse set of investors from the United States and Africa. Although starting small, they are thinking big. Chris Sacca’s micro fund is largely considered the best returns of all time in the venture community. 


            We can deliver similar returns, make Africa safer, and build a track record to build a much larger fund explains Derek Distenfield, COO and Co-founder of GSD Venture Studios.


            About TAC Africa: Led by INTERPOL National Technical Officer NigeriaJerry Akubo, TAC Africa was born from an International Forum on Technologies summit. TAC Africa brings together senior representatives from the worlds of technology, security, and industry to develop technological responses to evolving security challenges throughout Africa and beyond. The program is a non-governmental, bipartisan organization connecting law enforcement, subject matter experts, and civil society to solve issues that affect the African community with tech. 


            About GSD Venture Studios: Led by the thesis, Intellectual capacity is evenly spread throughout the world, but opportunity is not; GSD travels the globe to locate and cultivate promising startups that are locked out of Silicon Valley due to political, social, and cultural dynamics. Many companies lack the funds, packaging, and messaging needed to #GoGlobal. We have created a model to solve this problem through our accelerator, promote inclusive entrepreneurship, and produce top-tier returns.

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