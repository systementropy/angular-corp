(function() {
    'use strict';

    angular.module('myApp.corporate-main', ['ngRoute'])

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/corporate-main', {
                templateUrl: '/view/corporate-main.html',
                controller: 'CorporateMainCtrl'
            });
        }
    ])

    .controller('CorporateMainCtrl', ['$rootScope' ,'$scope', '$http','$timeout','$location','parallaxHelper','$window', function($rootScope,$scope, $http,$timeout,$location,parallaxHelper,$window) {
        $scope.openProfile = function(sec,status,index){
            console.log(sec,status,index);
            if (!status) {
                    $scope.openMap={
                        'Management':{},
                        'TV':{},
                        'CNBC':{},
                        'News18':{},
                        'Digital':{},
                        'Print':{},
                        'Entertainment':{},
                        'Distribution':{}
                    };
                    $scope.openMap[sec][index]=true;
            }else {
                $scope.openMap={
                    'Management':{},
                    'TV':{},
                    'CNBC':{},
                    'News18':{},
                    'Digital':{},
                    'Print':{},
                    'Entertainment':{},
                    'Distribution':{}
                };
            }
            
        };
        $scope.init = function(){
            $window.document.title='NETWORK18 | About Us';
            $scope.peopleData = {
                'Management':[
                    {
                        'name':"Rahul Joshi",
                        'text':"Rahul Joshi, who currently serves as the company’s Managing Director, has been a part of the Network18 Group since September 2015. Prior to joining the organization, he has worked with reputed publications such as The Indian Express and The Economic Times, where he was also responsible for launching ETNOW in 2009 and shaping ET online’s digital coverage. He holds a Masters in Management degree from Narsee Monjee Institute of Management Studies (NMIMS), Mumbai University.",
                        'img':"/images/profile/rahuljoshi.png"
                    },{
                        'name':"Ramesh Damani",
                        'text':"Ramesh Kumar Damani is the Group Chief Financial Officer of Network18 and TV18. Ramesh is a qualified Chartered Accountant and Company Secretary and has a rich professional experience of close to 25 years in the fields of Finance, Taxation, Mergers and Acquisitions, Planning, Corporate laws and Corporate Strategy. Ramesh has been with Reliance for 12 years and since October 2015 has been overseeing the finance function of the Network18 group.",
                        'img':"/images/profile/RameshDamani.png"
                    },{
                        'name':"Kshipra Jatana",
                        'text':"Kshipra is the Group General Counsel, Network18",
                        'img':"/images/profile/KshipraJatana.png"
                    },{
                        'name':"P Sakthivel",
                        'text':"P Sakthivel has been part of Reliance Industries Limited for more than 13 years and is currently the Chief Human Resource Officer of Network 18 Group. He has been instrumental in setting up HR systems & processes for Reliance Exploration & Production (E&P) business and Reliance Jio before taking over the current role.  Erstwhile he has worked in ONGC, EID Parry India Limited, Arthur Anderson and Bharti Airtel.",
                        'img':"/images/profile/psakthivel.png"
                    },{
                        'name':"Rajat Nigam",
                        'text':"Rajat leads the Technology for the group both in Broadcast and Digital domains. He drives synergies and integrations of various technologies used at different products/businesses of the group. With over 26 years of experience and exposure to all aspects of media technology ranging from Satellite Communication, International Sports, News Broadcast, FM Radio to Digital Media, he spearheads the technology innovations, digital transformation and operations for the Network.'",
                        'img':"/images/profile/RajatNigam.png"
                    }
                ],
                'TV':[
                    {
                        'name':"Avinash Kaul",
                        'text':"Avinash is currently the Chief Operating Officer – Network18 and Managing Director, A+E Networks | TV18( History TV18 and FYI TV18 ). Avinash joined TV18 in mid-2014 as the CEO of IBN News Network and prior to that he was the Chief Executive Officer at Bennett Coleman and Company Ltd TV Division ( Times Now, ET Now, Zoom ) & CEO of Sahara One Media and Entertainment Ltd. He was part of the launch team of NDTV when it turned broadcaster in 2001 and also set up the consulting division of NDTV Media which worked on brands like MSN , Disney, Nickelodeon among other regional and national channel brands in India .  His earlier stints in Media were with Star India and Discovery Communications. Avinash has done his Master in Media Studies from Sydenham Institute of Management Studies and is a Bachelor of Mechanical Engineering from Pune University.",
                        'img':"/images/profile/avinashkaul.png"
                    },{
                        'name':"Priyanka Kaul",
                        'text':"Priyanka leads Marketing and Special Projects for Network 18 aligning strategy and content across all verticals for domestic and international markets. She also focuses on driving social change in India through 360 degree media campaigns for the group. Previously, Priyanka was Chief Revenue and Marketing Officer for the NDTV Group. In 2007, she founded the Special Projects and Campaigns vertical at NDTV – a first in India. She has won various awards, including the prestigious Commonwealth Broadcasting Association Award.",
                        'img':"/images/profile/PriyankaKaul.png"
                    },{
                        'name':"Santosh Menon",
                        'text':"Santosh Menon heads editorial and content  for Network 18’s digital operations as Chief Content Officer and also plays a key role in integrating editorial operations across platforms and brands. A journalist with more than two decades of experience across continents, Santosh joined Network 18 in April 2016 from The Economic Times where he was Deputy Executive Editor and Head of News. Before that he worked for Reuters in London and reported from around Europe. At Network 18, he has driven editorial strategy and expansion across brands and spearheaded the creation of new properties.",
                        'img':"/images/profile/SantoshMenon.png"
                    },{
                        'name':"Manish Maheshwari",
                        'text':"Manish is CEO of Network18 Digital, which is the mobile and internet arm of Network18 Group, India's largest media and entertainment group serving content in 18 languages with 650 million television viewers and 105 million monthly unique digital visitors. Previously, Manish headed Flipkart's Seller Business and Ecosystem and worked at McKinsey in New York. He holds an MBA with honours from Wharton Business School.",
                        'img':"/images/profile/ManishMaheshwari.png"
                    },{
                        'name':"Puneet Singhvi",
                        'text':"Puneet is the Executive Vice President – Corporate Development & Digital Strategy. He oversees Investments, M&As, Partnerships, Strategic Alliances and Business Development across all media platforms (Television, Telecom, Digital and Offline) within the Group. Puneet also leads digital strategy and is part of the team that evaluates and drives investment and alliance initiatives across technology and digital domain. Erstwhile, he has served as COO of Times Global Partners where he was responsible for overall strategy and growth.",
                        'img':"/images/profile/PuneetSinghvi.png"
                    },{
                        'name':"Rahul Kansal",
                        'text':"Rahul Kansal, Group Brand Advisor, helps the various business verticals of Network  18 with their brand-building and marketing strategies. He is also overseeing the company’s forthcoming entry into news publishing. Rahul is a veteran of media marketing, and was earlier Executive President of Bennett Coleman, serving as business head of The Times of India and the company’s language newspapers.",
                        'img':"/images/profile/RahulKansal.png"
                    }
                ],
                'CNBC':[
                    {
                        'name':"Shereen Bhan",
                        'text':"Shereen is the Managing Editor of CNBC-TV18. A graduate in Philosophy from St. Stephen's College, Delhi and a post-graduate in Communication Studies from the University of Pune, she has over 17 years of experience in the field of Television Broadcast, 16 of which were spent in tracking corporate, policy news and events that defined the business landscape in India. For over a decade now, Shereen has been not only producing and anchoring flagship daily news shows like 'India Business Hour' and 'What's Hot', she has also been hands-on in guiding and moulding young business journalists.",
                        'img':"/images/profile/sheerin.png"
                    },{
                        'name':"Udayan Mukherjee",
                        'text':"Udayan is one of the most renowned journalists of India and is currently the Consulting Editor of CNBC-TV18. He has been with CNBC Network in India since its inception and has made a significant contribution. role there as a Managing Editor.  Udayan is an Economist by training having obtained his B.Sc in Economics from Presidency College, Kolkata and an MA in Economics from Jawaharlal Nehru University, New Delhi.",
                        'img':"/images/profile/udayanmukharjee.png"
                    },{
                        'name':"Latha Venkatesh",
                        'text':"Latha is the Executive Editor of CNBC-TV18. She began her career in CNBC-TV18 as chief of the Mumbai News Bureau. Over the years, she has come to be recognized as one of the keenest watchers of the Reserve Bank of India and a respected commentator on banking sector issues, money markets and macroeconomic trends. She has been a business journalist for years and has specialized in covering all markets - stocks, currency debt and commodities. She has also had stints in all major streams of media having worked in Economic Times and Dow Jones newswires for five years each. Latha graduated in Economics and Politics and has a doctoral degree in Political Science.",
                        'img':"/images/profile/lathavenkatesh.png"
                    },{
                        'name':"Alok Joshi",
                        'text':"As Managing Editor Alok Leads the editorial teams of India’s number one Business channel CNBC-Awaaz and Gujarati Business channel CNBC-BAJAR. He also anchors Awaaz Adda, the most popular and respected debate show across Business TV. Before TV18 he has worked with BBC World Service, TV TODAY, Times Group, Dainik Jagran and the Allahabad Patrika Group in various capacities across TV, Internet, radio and print media.",
                        'img':"/images/profile/alokjoshi.png"
                    }
                ],
                'News18':[
                    {
                        'name':"Bhupendra Chaubey",
                        'text':"Bhupendra Chaubey is India’s most trusted political journalist on News television. A person who epitomises the rigour of journalism, in a world where opinions can be shaped in 100 characters , Bhupendra is the quintessential old world journalist who goes not just by his own gut but the ground level realities. He is the executive editor at CNN News18 and is the main political anchor for the network. He drives a team of bright political reporters across the country and hosts the channels flagship news show “Viewpoint. “. Having won national and international acclaim for his work, He brings with himself almost two decades of journalistic excellence",
                        'img':"/images/profile/Bhupendrachaubey.png"
                    },{
                        'name':"Anuradha Sengupta",
                        'text':"Anuradha SenGupta is  part of the core leadership team at CNN NEWS18. She’s focussed on revamping news television to make it more  relevant and appealing to viewers in a  digital world. Her work includes devising and commissioning new program concepts and formats with a special focus on the weekends. Anuradha has been a broadcast journalist since 1995 and has worked with CNBC-TV18 previously where she  created and hosted a clutch of cult programs  including  ‘Storyboard edited by Anuradha SenGupta’, ‘Beautiful People’ and ’Being..’  She has also helped create the Amul India Show on Star Plus, Nkki Tonight on Star Plus and MTV U on MTV, all of which created industry benchmarks.",
                        'img':"/images/profile/anuradhasengupta.png"
                    },{
                        'name':"Zakka Jacob",
                        'text':"Zakka Jacob is Editor-Output of CNN News 18 and the host of the channel’s flagship show Face-Off Tonight. He is the only Indian Anchor who has won the prestigious Asian Television Award for Best Anchor in Asia, TWICE. Zakka won this award for the first time in 2016 and again in 2018. In his span in CNN News18, Zakka has managed to carve a niche in the crowded and noisy primetime which is dominated by loud talking panelists and shouting matches that pass off as debates. Zakka’s calm demeanor and sharp questions have quickly earned him the moniker “thinking man’s anchor”. Last year he was chosen in Impact Magazine's 40 under 40 list of influential media persons. Prior to joining CNN News18, Zakka worked in China Central Television from 2011 to 2014 becoming the first South Asian face on Chinese television. Zakka brings an international flavor to CNN News18’s programming. He started his career in 2001 with Sun News, a regional channel before moving to New Delhi with Headlines Today. At the time of Debut, Zakka was the youngest male anchor on Indian news TV.",
                        'img':"/images/profile/zakkajacob.png"
                    },{
                        'name':"Sudeep Mukhia",
                        'text':"Sudeep is the Executive Editor of CNN-News18 and manages the prime time band. Prior to this, he was the resident editor of Hindustan Times.",
                        'img':"/images/profile/profilepic.png"
                    },{
                        'name':"Prabal Pratap Singh",
                        'text':"Prabal Pratap Singh is Managing Editor of News18 India, one of the leading hindi national news channel of India. It belongs to Network18 group. A journalist who comes with a background experience of The Pioneer and  Aaj Tak. A first Indian journalist to set foot on the war driven Afghanistan, whose reportage was acknowledged all across.  Be it war, terrorism, left wing extremism and election, he has been there reporting from ground zero for the print and television in his 25 years of journalistic career.",
                        'img':"/images/profile/Prabal.png"
                    },{
                        'name':"Kishore Ajwani",
                        'text':"Known for his unique style, great narration and fierce attitude, Kishore Ajwani, Deputy Managing Editor, News18 India is a renowned name of Hindi journalism. His journalistic journey began in the year 2000 when he joined Doordarshan as an anchor. He later joined Zee News as an anchor-correspondent but in a very short span of time became Deputy Executive Producer. After a successful stint in Zee, Kishore joined ABP News (then Star News) in 2008 and subsequently, Netwok18 in 2016. In a career span of almost 17 years, he has hosted several popular shows. With a Masters in International Marketing from Delhi School of Economics, he also holds an MBA in Communications from MICA, Ahmedabad.",
                        'img':"/images/profile/KishoreAjwani.png"
                    },{
                        'name':"Amish Devgan",
                        'text':"With a career span of over 16 years, Amish Devgan, Executive Editor, News18 India is a well-known name in the media. From Hindustan Times to Zee Media, he has worked with some of the biggest brands in the industry. Prior to becoming the Chief Editor of Zee Business, in May 2015, Amish had also worked as Deputy Editor, Editor – Output and Editor – Special Projects of the channel. Known for his fearless journalism and undaunted attitude, Amish has led many big expose, be it coal scam and Odisha’s mining scam or disclosures related to hawala accused businessman Moin Qureshi.",
                        'img':"/images/profile/amishdevgan.png"
                    },{
                        'name':"Anand Narasimhan",
                        'text':"Anand Narasimhan, Deputy Executive Editor at CNN News18 is one of those lucky few whose passion is their profession. An MBA working as a media planner with Group M, Anand stumbled into broadcast after he won ‘Dream Job – Harsha Ki Khoj’ in 2005. His decade and a half broadcast career has seen him progress from a Sports Presenter with ESPN Star Sports to a full time TV Media Journalist with Times Now and now the News 18 Network. From reporting on ground on Mega News Events to helming marquee shows on Primetime, Anand has covered a gamut of issues and is one of the most multifaceted Primetime Anchors in TV Media. Fearless, tough and direct, Anand today takes the hot seat on primetime at 10pm on CNN-News18 with his show ‘The Right Stand’. He is along putting his multilingual abilities to good use with ‘Akhada’ in Hindi on News18 India at 12.45pm. Anand is a crusader for people’s causes and has always fought for what is right. A fitness freak and ardent old Hindi film music lover, he finds himself mentioned in the Limca Book of Records.",
                        'img':"/images/profile/Narsimhan.png"
                    },{
                        'name':"Rajesh Raina",
                        'text':"Rajesh Raina is the Group Editor of News18 Regional Channels. A journalist with more than 2 decades of experience in Television, he has played a pivotal role in Regional News growth story of News18 Network. He is an avid reader & has also written many articles in Hindi, Urdu & Kashmiri languages. His contribution to a fading art form “ Ladishah” has been recognised by many in J&K. He has been with the ETV group of channels, from 2001 & prior to that worked as an Anchor at DD - Kashmir.",
                        'img':"/images/profile/RajeshRaina.png"
                    },{
                        'name':"Karthik Subramanian",
                        'text':"Karthik works with the team in south India to make the News 18 channels in Karnataka, Kerala and Tamil Nadu the number 1 in their respective markets. He also heads Standards and Practices for the Network 18 group. Karthik was previously the Editor (South) at The Economic Times.",
                        'img':"/images/profile/KarthikSubbaraman.png"
                    }
                ],
                'Digital':[
                    {
                        'name':"BV Rao",
                        'text':"BV Rao is the Editor of Firstpost. In 33 years of his rich journalistic experience, he has led newsrooms across various brands, across various formats, across various cities and across all news platforms - print, broadcast and digital. He has delivered credible journalism and bigger readership/reach in all his assignments, which add up to no less than 15 in all.",
                        'img':"/images/profile/BVRao.png"
                    },{
                        'name':"Santosh Nair",
                        'text':"Santosh Nair oversees moneycontrol.com’s editorial coverage spanning breaking news, analysis, research and videos. Formerly, he was Markets Editor at The Economic Times, where he was responsible for driving stock market coverage.",
                        'img':"/images/profile/santoshnair.png"
                    },{
                        'name':"Praveen Thampi",
                        'text':"Praveen is the Executive Editor, News18.com",
                        'img':"/images/profile/pravinthampi.png"
                    },{
                        'name':"Gaurav Kalra",
                        'text':"Gaurav Kalra is the Group Sports Editor at Network 18. He works across all existing brands and platforms with particular focus on the expansion of Cricketnext.com, the group’s flagship Cricket website. Reporters and editors of all existing sports verticals across the network converge with him in addition to their existing managers. He was previously Senior Editor at ESPNCricinfo and served as Sports Editor of the erstwhile CNN-IBN between 2005 to 2013.",
                        'img':"/images/profile/GauravKalra.png"
                    },{
                        'name':"Pravin Swami",
                        'text':"Praveen Swami is a is Group Consulting Editor for Network18, and a on regional security and intelligence issues. Described by the BBC as “one of India’s foremost commentators on Islamist terrorism”, he has won several major awards for his work.  He is the author of two books on the India-Pakistan conflict. He has earlier held key editorial positions at The Indian Express, The Hindu, and The Daily Telegraph, London.",
                        'img':"/images/profile/praveenswami.png"
                    }
                ],
                'Print':[
                    {
                        'name':"Brian Carvalho",
                        'text':"Brian is the group editor of the publishing business of the Network 18 group. He edits Forbes India, a fortnightly business magazine, and its digital avatar. Prior to this assignment, he led features at The Economic Times and edited the eclectic Sunday product, called The Economic Times Magazine.",
                        'img':"/images/profile/BrianCarvalho.png"
                    }
                ],
                'Entertainment':[
                    {
                        'name':"Sudhanshu Vats",
                        'text':"Sudhanshu Vats is Managing Director, Viacom18 Media Pvt. Ltd., and responsible for all its lines of business – COLORS, Rishtey, Rishtey Cineplex, MTV, MTV Beats, Nickelodeon, Sonic, Nick Jr, Vh1, Comedy Central, COLORS Infinity, COLORS Kannada, COLORS Marathi, COLORS, Bangla, COLORS Oriya, COLORS Gujarati, COLORS Super and COLORS Tamil in Broadcast Entertainment; Viacom18 Motion Pictures in Filmed Entertainment; LIVE Viacom18 and BE Viacom18 in Experiential Entertainment; VOOT in Digital Entertainment and Viacom18 Consumer Products. In the last six years, he has successfully steered the group into a profitable growth phase while expanding the channel network, driving content-led cinema, entering experiential entertainment through Live events across genres, opening up the Consumer Products business line and making the company future ready with Viacom18 Digital Ventures’ OTT platform VOOT. Under Sudhanshu’s leadership the group has grown from 6 to over 44 channels and opened up 3 more lines of business leading to a stupendous 40 X growth in topline. A Hindustan Unilever (Unilever India) veteran, Sudhanshu Vats has spent about 20 years at the organization in different assignments. A Management Graduate from the Indian Institute of Management - Ahmedabad, he joined Hindustan Unilever Limited as a Management Trainee and worked with them in various Sales & Marketing and General Management roles across categories.",
                        'img':"/images/profile/sudhanshu.png"
                    }
                ],
                'Distribution':[
                    {
                        'name':"Anuj Gandhi",
                        'text':"Anuj Gandhi is the Group CEO of IndiaCast, a joint venture between TV18 and Viacom. Anuj heads a team of professionals for Traditional and New Media Platforms with a vast experience in Platform and Content Monetisation businesses in Linear (traditional TV channels) and Non-linear (VOD, Syndication etc.) forms. With a distinct understanding of the content distribution and platform business, Anuj is leading India's only Content Monetisation Company – IndiaCast.",
                        'img':"/images/profile/anujgandhi.png"
                    }
                ]
            };
            $scope.theBestVideo = 'vl3A2M63EUM';
            var w = angular.element($window);
            var wWid=w.width();
            var wHig=(w.height()/0.71);
            $scope.pWid=parseInt(w.width());
            $scope.pHigh=parseInt(((parseInt(w.width())*9)/16));
            
            $scope.playerVars = {
                'autoplay': 1,
                'controls': 0, 
                'rel' : 0,
                'showinfo':0,
                'fs' : 0,
                'loop': 1,
                'mute':1
            };
            $scope.$on('youtube.player.ended', function ($event, player) {
                
                player.seekTo(0);
                player.playVideo();
            });
            $scope.enableYT=true;
            $scope.slickConfig = {
                centerMode: true,
                slidesToShow: 1,
                dots: true,
                autoPlay:true,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                      }
                    }
                ]
            };
            $scope.fadeIn = parallaxHelper.createAnimator(0.15, 0, 1,-850);
            $scope.transY = parallaxHelper.createAnimator(0.4, 10, -10,-950);
            $scope.transYL = parallaxHelper.createAnimator(0.4, 20, -10,-850);
            $rootScope.hideHeader=false;
            $rootScope.hidefooter=false;
            $scope.openMap={
                'Management':{},
                'TV':{},
                'CNBC':{},
                'News18':{},
                'Digital':{},
                'Print':{},
                'Entertainment':{},
                'Distribution':{}
            };
        };
        
        $scope.init();
    }]);
}());
