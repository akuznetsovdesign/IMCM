import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker,
    Sphere,
    Graticule, Line, Text
  } from "react-simple-maps";

export function InteractiveMap({selected}:any) {
    return (
        <div className='w-[100%] h-[100%]'>
            <ComposableMap
            projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 180,
              }}>
                <Geographies geography="/features.json">
                    {({ geographies }:any) =>
                        geographies.map((geo:any) => (
                            <Geography fill="#D7E2F4" stroke="#87A6DE" strokeWidth={0.3} key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
                { selected === 'india' ? // India
                    <g>
                        <Line from={[78.5552747140303,21.935015395372076]} to={[54.27192642347896, 23.849229502041183]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[78.5552747140303,21.935015395372076]} to={[-97.79264725696103, 39.480274681203724]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[78.5552747140303,21.935015395372076]} to={[44.675395515169896, 23.521957337105178]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[78.5552747140303,21.935015395372076]} to={[67.76371311794517, 28.246655437147552]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[78.5552747140303,21.935015395372076]} to={[57.111431959863694, 21.347372589774935]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'mexico' ? // Mexico
                    <g>
                        <Line from={[-102.53779840000112,23.909441563738127]} to={[-97.88209919232017, 39.4329173208142]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-102.53779840000112,23.909441563738127]} to={[-106.44327505851561,55.374007377295555]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-102.53779840000112,23.909441563738127]} to={[-4.06959689980485,41.28141752612319]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-102.53779840000112,23.909441563738127]} to={[10.013214430782568,51.1043144592245]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-102.53779840000112,23.909441563738127]} to={[-90.39670809457047,15.607490926956203]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'russia' ? // Russia
                    <g>
                        <Line from={[37.684804677417304,55.9327723732045]} to={[31.32995437776023,49.304625058987455]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[37.684804677417304,55.9327723732045]} to={[67.28927441785589,48.22381685024345]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[37.684804677417304,55.9327723732045]} to={[10.043537851399691,51.11397338184696]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[37.684804677417304,55.9327723732045]} to={[63.171731518817325,41.70888158258438]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[37.684804677417304,55.9327723732045]} to={[27.560991857322648,53.89754477215669]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'china' ? // China
                    <g>
                        <Line from={[102.02153870122459,35.44662535434577]} to={[-97.93315657458834,39.37422671351848]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[102.02153870122459,35.44662535434577]} to={[128.15371601430286,36.50961703806931]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[102.02153870122459,35.44662535434577]} to={[138.6319871307561,36.397680667124334]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[102.02153870122459,35.44662535434577]} to={[-106.14419759455967,55.401315266083884]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[102.02153870122459,35.44662535434577]} to={[134.573996320922,-25.71145698912757]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'usa' ? // United States
                    <g>
                        <Line from={[-97.84066217217853,39.373769646695166]} to={[-102.53779840000004,24.042372337443524]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-97.84066217217853,39.373769646695166]} to={[-105.98212732377067,55.59164773444235]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-97.84066217217853,39.373769646695166]} to={[-2.3501753994734997,54.2262748692045]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-97.84066217217853,39.373769646695166]} to={[10.043704338520115,51.09488099680337]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-97.84066217217853,39.373769646695166]} to={[134.5745457144385,-25.65395309927048]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'indonesia' ? // Indonesia
                    <g>
                        <Line from={[128.20260703976385,-3.655752251296562]} to={[44.676812345715405,23.373879269546748]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[128.20260703976385,-3.655752251296562]} to={[102.27322303997965,4.421924207181533]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[128.20260703976385,-3.655752251296562]} to={[54.25670353063799,23.85777718209522]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[128.20260703976385,-3.655752251296562]} to={[103.80807974511293,1.3526087099543957]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[128.20260703976385,-3.655752251296562]} to={[90.08202863591316,24.353376163159183]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'pakistan' ? // Pakistan
                    <g>
                        <Line from={[67.72574210128482,28.18992313345312]} to={[44.71933181146753,23.39354411775247]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[67.72574210128482,28.18992313345312]} to={[54.26146180187763,23.853425421262386]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[67.72574210128482,28.18992313345312]} to={[78.47568414329794,22.202539371088832]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[67.72574210128482,28.18992313345312]} to={[-2.325849919265778,54.26690922552419]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[67.72574210128482,28.18992313345312]} to={[-97.84066217217853,39.373769646695166]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'nigeria' ? // Nigeria
                    <g>
                        <Line from={[8.102025460250672,9.598393146716148]} to={[-97.95314465030202,39.40036001681602]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[8.102025460250672,9.598393146716148]} to={[-2.3262010656075063,54.25328955460043]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[8.102025460250672,9.598393146716148]} to={[12.214393388755525,4.799021211664382]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[8.102025460250672,9.598393146716148]} to={[9.426118718501186,17.447324651258143]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[8.102025460250672,9.598393146716148]} to={[12.642834390461644,42.506729950688026]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'brazil' ? // Brazil
                    <g>
                        <Line from={[-51.6086139089368,-9.588921125031234]} to={[-97.76722296395172,39.62001931475578]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-51.6086139089368,-9.588921125031234]} to={[138.6319871307561,36.397680667124334]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-51.6086139089368,-9.588921125031234]} to={[-8.594786468790687,39.60805823739955]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-51.6086139089368,-9.588921125031234]} to={[12.642834390461644,42.506729950688026]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-51.6086139089368,-9.588921125031234]} to={[-4.066331332590607,41.261870192965915]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'bangladesh' ? // Bangladesh
                    <g>
                        <Line from={[90.08202863591316,24.34593640645417]} to={[78.47795168828486,22.131221380442938]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[90.08202863591316,24.34593640645417]} to={[44.69804683552471,23.39348980460572]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[90.08202863591316,24.34593640645417]} to={[54.25670353063799,23.85777718209522]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[90.08202863591316,24.34593640645417]} to={[114.97726500158626,4.961097074207515]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[90.08202863591316,24.34593640645417]} to={[47.59226389832179,29.336590278432155]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'japan' ? // Japan
                    <g>
                        <Line from={[138.6319871307561,36.397680667124334]} to={[-97.54142977896532,39.56635487156416]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[138.6319871307561,36.397680667124334]} to={[-51.560046602534385,-9.68593652659169]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[138.6319871307561,36.397680667124334]} to={[134.57233053670257,-25.88382206420134]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[138.6319871307561,36.397680667124334]} to={[-2.3491453568606175,54.26713590738328]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[138.6319871307561,36.397680667124334]} to={[10.028071720699359,51.1425558589213]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'egypt' ? // Egypt
                    <g>
                        <Line from={[29.897180655412967,26.509111179745744]} to={[44.71933181146753,23.39354411775247]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[29.897180655412967,26.509111179745744]} to={[54.24926186698707,23.830335382221506]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[29.897180655412967,26.509111179745744]} to={[47.59395452191143,29.287375619713885]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[29.897180655412967,26.509111179745744]} to={[-97.54142977896532,39.56635487156416]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[29.897180655412967,26.509111179745744]} to={[51.18572798453613,25.3195446442285]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'turkey' ? // Turkey
                    <g>
                        <Line from={[35.196296449998954,39.02497974566529]} to={[10.028417861278456,51.10437186018834]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[35.196296449998954,39.02497974566529]} to={[2.592063085192052,47.82305887476801]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[35.196296449998954,39.02497974566529]} to={[5.608461528724803,51.97366416170121]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[35.196296449998954,39.02497974566529]} to={[14.31384564285699,47.60939672749197]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[35.196296449998954,39.02497974566529]} to={[-97.65435104037189,39.593270813889944]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'viet-nam' ? // Viet Nam
                    <g>
                        <Line from={[108.30212395775965,14.413163595635183]} to={[-97.67906463393138,39.51124465178066]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[108.30212395775965,14.413163595635183]} to={[138.60577364113658,36.30973067419083]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[108.30212395775965,14.413163595635183]} to={[101.95600930167222,35.4976743051017]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[108.30212395775965,14.413163595635183]} to={[134.63606386284994,-25.769817836906896]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[108.30212395775965,14.413163595635183]} to={[-105.8572606489198,55.4853145500891]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'germany' ? // Germany
                    <g>
                        <Line from={[10.058663774119225,51.12357273148146]} to={[-97.56625714719658,39.48432592714096]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[10.058663774119225,51.12357273148146]} to={[35.196296449998954,39.06881172495528]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[10.058663774119225,51.12357273148146]} to={[8.236773907893678,46.803465530202516]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[10.058663774119225,51.12357273148146]} to={[-2.3269018839203284,54.226048001275245]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[10.058663774119225,51.12357273148146]} to={[14.299503499999872,47.6045619020052]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'france' ? // France
                    <g>
                        <Line from={[2.628140096239406,47.823023737096406]} to={[-4.040971929510505,41.302040167441504]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[2.628140096239406,47.823023737096406]} to={[4.630062297076165,50.43968305190393]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[2.628140096239406,47.823023737096406]} to={[-2.326551720263268,54.239669149428806]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[2.628140096239406,47.823023737096406]} to={[8.241037210524325,46.80054720755561]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[2.628140096239406,47.823023737096406]} to={[-97.56625714719658,39.48432592714096]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'italy' ? // Italy
                    <g>
                        <Line from={[12.642848828545056,42.549849313978996]} to={[10.055310147463047,51.10491267419317]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[12.642848828545056,42.549849313978996]} to={[2.608327498938735,47.80588874486108]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[12.642848828545056,42.549849313978996]} to={[-97.72538079208093,39.32610954913005]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[12.642848828545056,42.549849313978996]} to={[8.236773907893678,46.803465530202516]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[12.642848828545056,42.549849313978996]} to={[-105.88197195531026,55.60037181542447]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
                { selected === 'uk' ? // United Kingdom
                    <g>
                        <Line from={[-2.3269018839203284,54.226048001275245]} to={[ 134.57288873589772,-25.82639124826109]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-2.3269018839203284,54.226048001275245]} to={[-97.65435104037189,39.593270813889944]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-2.3269018839203284,54.226048001275245]} to={[-105.78317659653041,55.694589529518424]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-2.3269018839203284,54.226048001275245]} to={[-7.735510774576795,53.30777482414658]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                        <Line from={[-2.3269018839203284,54.226048001275245]} to={[-4.0158144008952945,41.25947722310917]} stroke="#2A64F6" strokeWidth={2} strokeLinecap="round"/>
                    </g>
                    : <g></g>
                }
            </ComposableMap>
        </div>
    )
}