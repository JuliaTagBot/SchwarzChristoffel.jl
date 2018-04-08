var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#SchwarzChristoffel-1",
    "page": "Home",
    "title": "SchwarzChristoffel",
    "category": "section",
    "text": "A tool to map polygons."
},

{
    "location": "index.html#About-the-package-1",
    "page": "Home",
    "title": "About the package",
    "category": "section",
    "text": "The purpose of this package is to enable easy construction and evaluation of the conformal mapping from the region inside or outside the unit circle to the exterior of a closed polygon.A polygon could be a simple shape, of course, like a square, with only a few vertices:using SchwarzChristoffel\np = Polygon([-0.5,0.5,0.5,-0.5],[-0.5,-0.5,0.5,0.5])\nm = ExteriorMap(p)\nconformal_grid(m)\nsavefig(\"square.svg\",format=\"svg\")(Image: )or it could be a more complicated shape, like a NACA 4412 airfoil:using SchwarzChristoffel\nw = naca4(0.04,0.4,0.12;len=1)\np = Polygon(w)\nm = ExteriorMap(p)\nconformal_grid(m)\nsavefig(\"naca4412.svg\",format=\"svg\")(Image: )"
},

{
    "location": "index.html#Installation-1",
    "page": "Home",
    "title": "Installation",
    "category": "section",
    "text": "This package requires Julia 0.6- and above. It is not a registered package, so it should be installed with:julia> Pkg.clone(\"git@github.com:jdeldre/SchwarzChristoffel.jl.git\")Since it is still under heavy development, you should runjulia> Pkg.test(\"SchwarzChristoffel\") # might take some timeto make sure things are working as intended andjulia> Pkg.update()to get the most recent version of the library and its dependencies.Examples can be found in the documentation and the Jupyter notebooks."
},

{
    "location": "usage.html#",
    "page": "Basic Usage",
    "title": "Basic Usage",
    "category": "page",
    "text": ""
},

{
    "location": "usage.html#Basic-usage-1",
    "page": "Basic Usage",
    "title": "Basic usage",
    "category": "section",
    "text": "DocTestSetup = quote\nsrand(1)\nendusing SchwarzChristoffelFirst, we create a polygon shape by specifying its vertices. Note that the vertices must be provided in counter-clockwise order.x = [-1.0,0.2,1.0,-1.0]; y = [-1.0,-1.0,0.5,1.0];\np = Polygon(x,y)Let\'s plot the polygon to make sure it matches what we wanted.plot(p)\nsavefig(\"polygon4.svg\",format=\"svg\"); nothing # hide(Image: )Now, we create the map from the unit circle to the polygon.m = ExteriorMap(p)Let\'s visualize what we\'ve constructed. Here, we will inspect the mapping from the exterior of the unit circle to the exterior of the polygon.conformal_grid(m)\nsavefig(\"polygongrid.svg\",format=\"svg\"); nothing # hide(Image: )We can now easily evaluate the map at any place we like. It could be evaluated outside the unit circle:zeta = 1.2 + 0.1im\nevaluate(zeta,m)or it could be evaluated inside the unit circle:zeta = 0.5 + 0.1im\nevaluate(zeta,m,true)We can also evaluate the first and second derivative of the map at any place(s). Let\'s evaluate at a range of points outside the circle.zeta = collect(1.1:0.1:2.0) + 0.1im\ndz,ddz = evalderiv(zeta,m);\ndzusing SchwarzChristoffelNow let\'s try a more interesting shape. Here\'s a star-shaped bodyn = 8; dθ = 2π/(2n)\nθ = collect(0:dθ:2π-dθ)\nw = (1+0.3cos.(n*θ)).*exp.(im*θ)\np = Polygon(w)\nplot(p)\nsavefig(\"polygon8.svg\",format=\"svg\"); nothing # hide(Image: )Construct the map and plot itm = ExteriorMap(p)\nconformal_grid(m)\nsavefig(\"polygongrid8.svg\",format=\"svg\"); nothing # hide(Image: )"
},

{
    "location": "polygons.html#",
    "page": "Polygons",
    "title": "Polygons",
    "category": "page",
    "text": ""
},

{
    "location": "polygons.html#Polygons-1",
    "page": "Polygons",
    "title": "Polygons",
    "category": "section",
    "text": "DocTestSetup = quote\nusing SchwarzChristoffel\nsrand(1)\nend"
},

{
    "location": "polygons.html#SchwarzChristoffel.Polygons.Polygon",
    "page": "Polygons",
    "title": "SchwarzChristoffel.Polygons.Polygon",
    "category": "type",
    "text": "Polygon(x::Vector{Float64}, y::Vector{Float64})\n\nA polygon defined by its vertices, which must be provided in counter-clockwise order.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0])\nPolygon with 4 vertices at\n             (-1.0,-1.0) (0.2,-1.0) (1.0,0.5) (-1.0,1.0)\n             interior angles/π = [0.5, 0.656, 0.422, 0.422]\n\n\n\n"
},

{
    "location": "polygons.html#SchwarzChristoffel.Polygons.vertex",
    "page": "Polygons",
    "title": "SchwarzChristoffel.Polygons.vertex",
    "category": "function",
    "text": "vertex(p::Polygon) -> Vector{Complex128}\n\nReturns the vector of vertices of the polygon p, in complex form.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> vertex(p)\n4-element Array{Complex{Float64},1}:\n -1.0-1.0im\n  0.2-1.0im\n  1.0+0.5im\n -1.0+1.0im\n\n\n\n"
},

{
    "location": "polygons.html#SchwarzChristoffel.Polygons.interiorangle",
    "page": "Polygons",
    "title": "SchwarzChristoffel.Polygons.interiorangle",
    "category": "function",
    "text": "interiorangle(p::Polygon) -> Vector{Float64}\n\nReturns the vector of interior angles (divided by pi) of the polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> interiorangle(p)\n4-element Array{Float64,1}:\n 0.5\n 0.655958\n 0.422021\n 0.422021\n\n\n\n"
},

{
    "location": "polygons.html#Base.length-Tuple{SchwarzChristoffel.Polygons.Polygon}",
    "page": "Polygons",
    "title": "Base.length",
    "category": "method",
    "text": "length(p::Polygon) -> Integer\n\nReturns the number of vertices of the polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> length(p)\n4\n\n\n\n"
},

{
    "location": "polygons.html#Base.isinf-Tuple{SchwarzChristoffel.Polygons.Polygon}",
    "page": "Polygons",
    "title": "Base.isinf",
    "category": "method",
    "text": "isinf(p::Polygon) -> Bool\n\nReturns true if any vertex in polygon p is at infinity.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> isinf(p)\nfalse\n\n\n\n"
},

{
    "location": "polygons.html#SchwarzChristoffel.Polygons.isinpoly",
    "page": "Polygons",
    "title": "SchwarzChristoffel.Polygons.isinpoly",
    "category": "function",
    "text": "isinpoly(z::Complex128,p::Polygon) -> Bool\n\nReturns true or false depending on whether z is inside or outside polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> isinpoly(0.0+0.0im,p)\ntrue\n\njulia> isinpoly(1.0+2.0im,p)\nfalse\n\n\n\nisinpoly(z::Complex128,p::Polygon,tol::Float64) -> Bool\n\nReturns true if z is inside or within distance tol of polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> isinpoly(-1.01+0.0im,p)\nfalse\n\njulia> isinpoly(-1.01+0.0im,p,1e-2)\ntrue\n\n\n\n"
},

{
    "location": "polygons.html#SchwarzChristoffel.Polygons.naca4",
    "page": "Polygons",
    "title": "SchwarzChristoffel.Polygons.naca4",
    "category": "function",
    "text": "naca4(cam,pos,t[;np=20][,Zc=0.0+0.0im][,len=1.0]) -> Vector{Complex128}\n\nGenerates the vertices of a NACA 4-digit airfoil of chord length 1. The relative camber is specified by cam, the position of maximum camber (as fraction of chord) by pos, and the relative thickness by t.\n\nThe optional parameter np specifies the number of points on the upper or lower surface. The optional parameter Zc specifies the mean position of the vertices (which is set to the origin by default). The optional parameter len specifies the chord length.\n\nExample\n\njulia> w = naca4(0.0,0.0,0.12);\n\njulia> p = Polygon(w);\n\n\n\n"
},

{
    "location": "polygons.html#Methods-1",
    "page": "Polygons",
    "title": "Methods",
    "category": "section",
    "text": "Polygons.Polygon\nPolygons.vertex\nPolygons.interiorangle\nBase.length(::Polygons.Polygon)\nBase.isinf(::Polygons.Polygon)\nPolygons.isinpoly\nPolygons.naca4"
},

{
    "location": "polygons.html#Index-1",
    "page": "Polygons",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"polygons.md\"]"
},

{
    "location": "exterior.html#",
    "page": "Exterior map",
    "title": "Exterior map",
    "category": "page",
    "text": ""
},

{
    "location": "exterior.html#Exterior-map-1",
    "page": "Exterior map",
    "title": "Exterior map",
    "category": "section",
    "text": "DocTestSetup = quote\nusing SchwarzChristoffel\nsrand(1)\nend"
},

{
    "location": "exterior.html#SchwarzChristoffel.Exterior.PowerMap",
    "page": "Exterior map",
    "title": "SchwarzChristoffel.Exterior.PowerMap",
    "category": "type",
    "text": "PowerMap(c::Vector{Complex12}[;N = 200]) <: ConformalMap\n\nCreate a power series map from the exterior of the unit circle to the exterior of a shape defined by the power series coefficients.\n\nExample\n\njulia> c = Complex128[1,0,1/4];\n\njulia> m = PowerMap(c)\nPower series map:\n   multipole coefficients: c₁ = 1.0 + 0.0im, c₀ = 0.0 + 0.0im, c₋ᵢ = 0.25 + 0.0im, i = 1:1\n\n\n\n"
},

{
    "location": "exterior.html#SchwarzChristoffel.Exterior.ExteriorMap",
    "page": "Exterior map",
    "title": "SchwarzChristoffel.Exterior.ExteriorMap",
    "category": "type",
    "text": "ExteriorMap(p::Polygon[;tol::Float64][,ncoeff::Int]) <: ConformalMap\n\nCreate a Schwarz-Christoffel map from the interior or exterior of the unit circle to the exterior of polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p)\nExterior map with 4 vertices\n   vertices: (-1.0,-1.0), (0.2,-1.0), (1.0,0.5), (-1.0,1.0),\n   interior angles/π: 0.5, 0.656, 0.422, 0.422,\n   prevertices on circle: (1.0,0.0), (0.3764,-0.9265), (-0.9024,-0.4309), (-0.1868,0.9824),\n   prevertex angles/π: -0.7291, -0.3519, 0.1291, 0.7111,\n   constant = 0.6722 + 0.7669im, accuracy = 1.0e-8,\n   number of multipole coefficients = 12\n\nExteriorMap(p;tol=1e-12) manually sets the tolerance to 1e-12 (the default is 1e-8).\n\nExteriorMap(p;ncoeff=16) manually sets the number of coefficients of negative powers of the multipole expansion of the mapping to 16 (the default is 12).\n\n\n\n"
},

{
    "location": "exterior.html#Base.length",
    "page": "Exterior map",
    "title": "Base.length",
    "category": "function",
    "text": "length(A::AbstractArray) -> Integer\n\nReturns the number of elements in A.\n\njulia> A = ones(3,4,5);\n\njulia> length(A)\n60\n\n\n\nlength(s::AbstractString)\n\nThe number of characters in string s.\n\nExample\n\njulia> length(\"jμΛIα\")\n5\n\n\n\nlength(collection) -> Integer\n\nFor ordered, indexable collections, returns the maximum index i for which getindex(collection, i) is valid. For unordered collections, returns the number of elements.\n\nExamples\n\njulia> length(1:5)\n5\n\njulia> length([1; 2; 3; 4])\n4\n\n\n\nlength(p::Polygon) -> Integer\n\nReturns the number of vertices of the polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> length(p)\n4\n\n\n\nlength(m::ConformalMap) -> Integer\n\nReturns the number of control points/vertices of the map m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> length(m)\n4\n\n\n\n"
},

{
    "location": "exterior.html#SchwarzChristoffel.Exterior.parameters",
    "page": "Exterior map",
    "title": "SchwarzChristoffel.Exterior.parameters",
    "category": "function",
    "text": "parameters(m::ExteriorMap) -> Tuple{Vector{Complex128},Complex128}\n\nReturns a tuple of a vector of the prevertices and the complex factor of the exterior polygon mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> prev, C = parameters(m);\n\njulia> prev\n4-element Array{Complex{Float64},1}:\n       1.0+0.0im\n  0.376406-0.926455im\n -0.902383-0.430935im\n -0.186756+0.982406im\n\n\n\n"
},

{
    "location": "exterior.html#SchwarzChristoffel.Exterior.coefficients",
    "page": "Exterior map",
    "title": "SchwarzChristoffel.Exterior.coefficients",
    "category": "function",
    "text": "coefficients(m::ConformalMap) -> Tuple{Vector{Complex128},Vector{Complex128}}\n\nReturns a tuple of vectors of the complex coefficients of the multipole expansion of the mapping z(zeta) described by m as well as the coefficients of the square magnitude of the mapping z(zeta)^2.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> ccoeff, dcoeff = coefficients(m);\n\njulia> ccoeff\n14-element Array{Complex{Float64},1}:\n       1.0198+0.0im\n    -0.210364-0.0161983im\n  -0.00655708+0.0398156im\n     0.136922+0.0951343im\n    -0.095035+0.0891769im\n    0.0184341+0.0299586im\n    0.0136513+2.78095e-5im\n   -0.0159533-0.00264418im\n  -0.00167426-0.00501161im\n  -0.00578705-0.000221652im\n  -0.00447511+0.00252069im\n   0.00469089-0.00150588im\n  0.000441767-0.00192516im\n -0.000381357-0.00174291im\n\n\n\n"
},

{
    "location": "exterior.html#SchwarzChristoffel.Exterior.moments",
    "page": "Exterior map",
    "title": "SchwarzChristoffel.Exterior.moments",
    "category": "function",
    "text": "moments(m::ExteriorMap) -> Vector{Complex128}\n\nReturn the moments of the prevertices for exterior polygon mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> mom = moments(m)\n13-element Array{Complex{Float64},1}:\n -2.46691e-9+3.04899e-9im\n  -0.0128596+0.0780855im\n    0.805587+0.559726im\n    -1.12125+1.04835im\n    0.316471+0.633964im\n    0.462871+0.225702im\n    -1.56266+0.0306815im\n   -0.106975-0.476173im\n   -0.720332-0.0496159im\n     -1.1805+0.0838739im\n      1.1618-0.762023im\n  -0.0612155-0.5728im\n   -0.223423-0.726949im\n\n\n\n"
},

{
    "location": "exterior.html#SchwarzChristoffel.Exterior.area",
    "page": "Exterior map",
    "title": "SchwarzChristoffel.Exterior.area",
    "category": "function",
    "text": "area(m::ConformalMap) -> Float64\n\nReturns the area of the shape described by the mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> area(m)\n2.9\n\njulia> c = Complex128[1];\n\njulia> m = PowerMap(c);\n\njulia> area(m)\n3.141592653589793\n\n\n\n"
},

{
    "location": "exterior.html#SchwarzChristoffel.Exterior.centroid",
    "page": "Exterior map",
    "title": "SchwarzChristoffel.Exterior.centroid",
    "category": "function",
    "text": "centroid(m::ConformalMap) -> Complex128\n\nReturns the complex centroid position of the shape described by the mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> centroid(m)\n-0.20919540229885059 - 0.04022988505747128im\n\n\n\n"
},

{
    "location": "exterior.html#SchwarzChristoffel.Exterior.Jmoment",
    "page": "Exterior map",
    "title": "SchwarzChristoffel.Exterior.Jmoment",
    "category": "function",
    "text": "Jmoment(m::ConformalMap) -> Float64\n\nReturns the second area moment of the shape described by the mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> Jmoment(m)\n1.5768333333333333\n\n\n\n"
},

{
    "location": "exterior.html#Methods-1",
    "page": "Exterior map",
    "title": "Methods",
    "category": "section",
    "text": "Exterior.PowerMap\nExterior.ExteriorMap\nExterior.length\nExterior.parameters\nExterior.coefficients\nExterior.moments\nExterior.area\nExterior.centroid\nExterior.Jmoment"
},

{
    "location": "exterior.html#Index-1",
    "page": "Exterior map",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"exterior.md\"]"
},

{
    "location": "plotting.html#",
    "page": "Plotting",
    "title": "Plotting",
    "category": "page",
    "text": ""
},

{
    "location": "plotting.html#Plotting-1",
    "page": "Plotting",
    "title": "Plotting",
    "category": "section",
    "text": "DocTestSetup = quote\nusing SchwarzChristoffel\nsrand(1)\nend"
},

{
    "location": "plotting.html#SchwarzChristoffel.plot-Tuple{SchwarzChristoffel.Polygons.Polygon}",
    "page": "Plotting",
    "title": "SchwarzChristoffel.plot",
    "category": "method",
    "text": "plot(p::Polygon)\n\nPlots the polygon p.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> plot(p);\n\n\n\n"
},

{
    "location": "plotting.html#SchwarzChristoffel.conformal_grid",
    "page": "Plotting",
    "title": "SchwarzChristoffel.conformal_grid",
    "category": "function",
    "text": "conformal_grid(m::ConformalMap)\n\nPlots the grid lines generated by the exterior mapping m.\n\nExample\n\njulia> p = Polygon([-1.0,0.2,1.0,-1.0],[-1.0,-1.0,0.5,1.0]);\n\njulia> m = ExteriorMap(p);\n\njulia> conformal_grid(m);\n\n\n\n"
},

{
    "location": "plotting.html#Methods-1",
    "page": "Plotting",
    "title": "Methods",
    "category": "section",
    "text": "plot(::Polygon)\nconformal_grid"
},

{
    "location": "plotting.html#Index-1",
    "page": "Plotting",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"plotting.md\"]"
},

]}