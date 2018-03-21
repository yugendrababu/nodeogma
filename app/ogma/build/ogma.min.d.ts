export type AnimationOptions = {duration?: number, easing?: EasingFunction, startAfter?: number};
export type Badge = {color?: null|Color, scale?: number, positionScale?: number, image?: null|string, threshold?: number, stroke?: {color?: null|"inherit"|Color, width?: number}, text?: {content?: TextContent, color?: "inherit"|Color, font?: string, style?: "none"|"italic"|"bold", scale?: number}|TextContent};
export type BoundingBox = {minX: number, maxX: number, minY: number, maxY: number, cx: number, cy: number};
export type Color = string;
export type CursorStyle = string;
export type EasingFunction = "linear"|"quadraticIn"|"quadraticOut"|"quadraticInOut"|"cubicIn"|"cubicOut"|"cubicInOut"|((x: number) => number);
export type EdgeAttributes = {halo?: {color?: Color|null, size?: number}|Color|null, outline?: {enabled?: boolean, color?: Color}|boolean, hidden?: boolean, width?: number, color?: Color|"source"|"target", shape?: EdgeShape, strokeWidth?: number, threshold?: number};
export type EdgeAttributesRule = {halo?: {color?: ((edge: Edge) => (Color|null)), size?: ((edge: Edge) => (number))}|((edge: Edge) => (Color|null)), outline?: {enabled?: ((edge: Edge) => (boolean)), color?: ((edge: Edge) => (Color))}|((edge: Edge) => (boolean)), hidden?: ((edge: Edge) => (boolean)), width?: ((edge: Edge) => (number)), color?: ((edge: Edge) => (Color|"source"|"target")), shape?: ((edge: Edge) => (EdgeShape)), strokeWidth?: ((edge: Edge) => (number)), threshold?: ((edge: Edge) => (number))};
export type EdgeCollection = Edge|EdgeList|EdgeId|Array<Edge|EdgeId>;
export type EdgeDataAndAttributes = {data?: any, attributes?: NodeAttributes};
export type EdgeId = string|number;
export type EdgeShape = "arrow"|"dashed"|"dotted"|"line"|"tapered";
export type GeoCoordinate = Object;
export type GeoModeOptions = Object;
export type InputSource = "mouse"|"touch";
export type InputTarget = Node|Edge|null;
export type KeyCode = number;
export type KeyName = string;
export type LocateOptions = {};
export type MapPosition = Object;
export type MouseButton = "left"|"right"|"middle";
export type NodeAttributes = {x?: number, y?: number, badges?: {topLeft?: Badge, topRight?: Badge, bottomLeft?: Badge, bottomRight?: Badge}, halo?: {color?: Color|null, size?: number, strokeColor?: Color|null, strokeWidth?: number}|Color|null, icon?: {content?: string|number|null, font?: string, color?: Color, scale?: number, threshold?: number}|string|number|null, image?: {url?: string|null, scale?: number, rescale?: boolean, duplicate?: boolean, threshold?: number}|string|null, outline?: {enabled?: boolean, color?: Color}|boolean, hidden?: boolean, radius?: number, color?: Color|Array<Color>, shape?: NodeShape, innerStroke?: {width?: number, color?: Color, threshold?: number}, outerStroke?: {width?: number, color?: Color|null, threshold?: number}|null, text?: {content?: TextContent, font?: string, color?: Color, size?: number, scale?: number, scaling?: boolean, style?: "italic"|"bold"|"none", backgroundColor?: Color|"inherit"|null, backgroundMargin?: number, position?: "right"|"left"|"top"|"bottom"|"center", threshold?: number, maxLineLength?: number, backgroundArrowBaseSize?: number, secondary?: {content?: TextContent, font?: string, color?: Color, size?: number, scale?: number, style?: "italic"|"bold"|"none", backgroundColor?: Color|"inherit"|null, backgroundMargin?: number, margin?: number}|TextContent}|TextContent, draggable?: boolean, layoutable?: boolean};
export type NodeAttributesRule = {x?: ((node: Node) => (number)), y?: ((node: Node) => (number)), badges?: {topLeft?: {color?: ((node: Node) => (null|Color)), scale?: ((node: Node) => (number)), positionScale?: ((node: Node) => (number)), image?: ((node: Node) => (null|string)), threshold?: ((node: Node) => (number)), stroke?: {color?: ((node: Node) => (null|"inherit"|Color)), width?: ((node: Node) => (number))}, text?: {content?: ((node: Node) => (TextContent)), color?: ((node: Node) => ("inherit"|Color)), font?: ((node: Node) => (string)), style?: ((node: Node) => ("none"|"italic"|"bold")), scale?: ((node: Node) => (number))}|((node: Node) => (TextContent))}, topRight?: {color?: ((node: Node) => (null|Color)), scale?: ((node: Node) => (number)), positionScale?: ((node: Node) => (number)), image?: ((node: Node) => (null|string)), threshold?: ((node: Node) => (number)), stroke?: {color?: ((node: Node) => (null|"inherit"|Color)), width?: ((node: Node) => (number))}, text?: {content?: ((node: Node) => (TextContent)), color?: ((node: Node) => ("inherit"|Color)), font?: ((node: Node) => (string)), style?: ((node: Node) => ("none"|"italic"|"bold")), scale?: ((node: Node) => (number))}|((node: Node) => (TextContent))}, bottomLeft?: {color?: ((node: Node) => (null|Color)), scale?: ((node: Node) => (number)), positionScale?: ((node: Node) => (number)), image?: ((node: Node) => (null|string)), threshold?: ((node: Node) => (number)), stroke?: {color?: ((node: Node) => (null|"inherit"|Color)), width?: ((node: Node) => (number))}, text?: {content?: ((node: Node) => (TextContent)), color?: ((node: Node) => ("inherit"|Color)), font?: ((node: Node) => (string)), style?: ((node: Node) => ("none"|"italic"|"bold")), scale?: ((node: Node) => (number))}|((node: Node) => (TextContent))}, bottomRight?: {color?: ((node: Node) => (null|Color)), scale?: ((node: Node) => (number)), positionScale?: ((node: Node) => (number)), image?: ((node: Node) => (null|string)), threshold?: ((node: Node) => (number)), stroke?: {color?: ((node: Node) => (null|"inherit"|Color)), width?: ((node: Node) => (number))}, text?: {content?: ((node: Node) => (TextContent)), color?: ((node: Node) => ("inherit"|Color)), font?: ((node: Node) => (string)), style?: ((node: Node) => ("none"|"italic"|"bold")), scale?: ((node: Node) => (number))}|((node: Node) => (TextContent))}}, halo?: {color?: ((node: Node) => (Color|null)), size?: ((node: Node) => (number)), strokeColor?: ((node: Node) => (Color|null)), strokeWidth?: ((node: Node) => (number))}|((node: Node) => (Color|null)), icon?: {content?: ((node: Node) => (string|number|null)), font?: ((node: Node) => (string)), color?: ((node: Node) => (Color)), scale?: ((node: Node) => (number)), threshold?: ((node: Node) => (number))}|((node: Node) => (string|number|null)), image?: {url?: ((node: Node) => (string|null)), scale?: ((node: Node) => (number)), rescale?: ((node: Node) => (boolean)), duplicate?: ((node: Node) => (boolean)), threshold?: ((node: Node) => (number))}|((node: Node) => (string|null)), outline?: {enabled?: ((node: Node) => (boolean)), color?: ((node: Node) => (Color))}|((node: Node) => (boolean)), hidden?: ((node: Node) => (boolean)), radius?: ((node: Node) => (number)), color?: ((node: Node) => (Color|Array<Color>)), shape?: ((node: Node) => (NodeShape)), innerStroke?: {width?: ((node: Node) => (number)), color?: ((node: Node) => (Color)), threshold?: ((node: Node) => (number))}, outerStroke?: {width?: ((node: Node) => (number)), color?: ((node: Node) => (Color|null)), threshold?: ((node: Node) => (number))}|((node: Node) => (null)), text?: {content?: ((node: Node) => (TextContent)), font?: ((node: Node) => (string)), color?: ((node: Node) => (Color)), size?: ((node: Node) => (number)), scale?: ((node: Node) => (number)), scaling?: ((node: Node) => (boolean)), style?: ((node: Node) => ("italic"|"bold"|"none")), backgroundColor?: ((node: Node) => (Color|"inherit"|null)), backgroundMargin?: ((node: Node) => (number)), position?: ((node: Node) => ("right"|"left"|"top"|"bottom"|"center")), threshold?: ((node: Node) => (number)), maxLineLength?: ((node: Node) => (number)), backgroundArrowBaseSize?: ((node: Node) => (number)), secondary?: {content?: ((node: Node) => (TextContent)), font?: ((node: Node) => (string)), color?: ((node: Node) => (Color)), size?: ((node: Node) => (number)), scale?: ((node: Node) => (number)), style?: ((node: Node) => ("italic"|"bold"|"none")), backgroundColor?: ((node: Node) => (Color|"inherit"|null)), backgroundMargin?: ((node: Node) => (number)), margin?: ((node: Node) => (number))}|((node: Node) => (TextContent))}|((node: Node) => (TextContent)), draggable?: ((node: Node) => (boolean)), layoutable?: ((node: Node) => (boolean))};
export type NodeCollection = Node|NodeList|NodeId|Array<Node|NodeId>;
export type NodeDataAndAttributes = {data?: any, attributes?: NodeAttributes};
export type NodeId = string|number;
export type NodePosition = {x: number, y: number};
export type NodeShape = "circle"|"cross"|"diamond"|"equilateral"|"square"|"star";
export type Options = {edgeClipping?: boolean, edgeClippingPadding?: number, edgesAlwaysCurvy?: boolean, directedEdges?: boolean, detect?: {nodes?: boolean, edges?: boolean, nodeTexts?: boolean, edgeTexts?: boolean, nodeErrorMargin?: number, edgeErrorMargin?: number}, mouse?: {enabled?: boolean, wheelEnabled?: boolean, disableWheelUntilMouseDown?: boolean}, fpsLimit?: number|null, backgroundColor?: Color|null, touch?: {enabled?: boolean}};
export type PropertyPath = string|Array<string>;
export type RawEdge = {id?: EdgeId, source: NodeId, target: NodeId, attributes?: EdgeAttributes, data?: any};
export type RawGraph = {nodes: Array<RawNode>, edges: Array<RawEdge>};
export type RawNode = {id?: NodeId, attributes?: NodeAttributes, data?: any};
export type TextContent = string|number|null;
export type TransformationId = number;
export type View = {x: number, y: number, zoom: number, angle: number};
export type WatcherOptions = {path?: PropertyPath, unwindArrays?: boolean}|PropertyPath;

export default class Ogma {
  constructor(parameters?: {options?: Options, graph?: RawGraph, renderer?: "webgl"|"canvas"|"svg"|null, imgCrossOrigin?: "anonymous"|"use-credentials"|null, webglOptions?: {antiAliasing?: "super-sampling"|"native"|"none", fontSamplingSize?: number, minimumSvgSize?: null|number}, container?: string|HTMLElement});
  addEdge(edge: RawEdge): Edge;
  addEdgeFilter(selector: ((edge: Edge) => boolean)): EdgeFilter;
  addEdges(edges: Array<RawEdge>, options?: {batchSize?: number}): Promise<EdgeList>;
  addGraph(graph: RawGraph, options?: {locate?: LocateOptions, batchSize?: number}): void;
  addNode(node: RawNode): Node;
  addNodeFilter(selector: ((node: Node) => boolean)): NodeFilter;
  addNodes(nodes: Array<RawNode>, options?: {batchSize?: number}): Promise<NodeList>;
  clearGraph(): void;
  clearSelection(): void;
  createClass(className: string, options?: {nodeAttributes?: NodeAttributesRule, edgeAttributes?: EdgeAttributesRule, after?: string}): void;
  getConnectedComponents(): Array<NodeList>;
  getContainer(): void;
  getEdge(edgeId: EdgeId): Edge|undefined;
  getEdgeFilters(): Array<EdgeFilter>;
  getEdges(selector?: Array<EdgeId>|"visible"|"raw"|"all"): EdgeList;
  getEdgesByClassName(className: string): EdgeList;
  getHoveredElement(): Node|Edge|null;
  getNode(nodeId: NodeId): Node|undefined;
  getNodeFilters(): Array<NodeFilter>;
  getNodes(selector?: Array<NodeId>|"visible"|"raw"|"all"): NodeList;
  getNodesByClassName(className: string): NodeList;
  getNonSelectedEdges(): EdgeList;
  getNonSelectedNodes(): NodeList;
  getSelectedEdges(): EdgeList;
  getSelectedNodes(): NodeList;
  reloadFonts(): void;
  removeEdge(edge: Edge|EdgeId): void;
  removeEdges(edges: EdgeList|Array<Edge|EdgeId>): void;
  removeNode(node: Node|NodeId): void;
  removeNodes(nodes: NodeList|Array<Node|NodeId>): void;
  reset(): void;
  setContainer(elt: HTMLElement|string|null): void;
  setGraph(graph: RawGraph, options?: {batchSize?: number}): Promise<{nodes: NodeList, edges: EdgeList}>;
  setOptions(options: Options): void;
  updateClass(className: string, options?: {nodeAttributes?: NodeAttributesRule, edgeAttributes?: EdgeAttributesRule}): void;

  events: {
    onBeforeEdgesRemoved(handler: ((payload: {nodes: NodeList}) => void)): void;
    onBeforeNodesRemoved(handler: ((payload: {nodes: NodeList}) => void)): void;
    onClick(handler: ((payload: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource}) => void)): void;
    onDoubleClick(handler: ((payload: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource}) => void)): void;
    onDragEnd(handler: ((payload: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource}) => void)): void;
    onDragProgress(handler: ((payload: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource}) => void)): void;
    onDragStart(handler: ((payload: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource}) => void)): void;
    onEdgeDataChange(listener: ((evt: {changes: Array<{property: PropertyPath, edges: EdgeList, previousValues: Array<any>, newValues: Array<any>}>}) => void)): void;
    onEdgesAdded(handler: ((payload: {edges: EdgeList}) => void)): void;
    onEdgesClassAdded(className: string, handler: ((payload: {edges: EdgeList}) => void)): void;
    onEdgesClassRemoved(className: string, handler: ((payload: {edges: EdgeList}) => void)): void;
    onEdgesRemoved(handler: ((payload: {edges: EdgeList}) => void)): void;
    onEdgesSelected(handler: ((payload: {edges: EdgeList}) => void)): void;
    onEdgesUnselected(handler: ((payload: {edges: EdgeList}) => void)): void;
    onGeoModeDisabled(listener: ((any) => void)): void;
    onGeoModeEnabled(listener: ((any) => void)): void;
    onGeoModeLoaded(listener: ((any) => void)): void;
    onGestureEnd(handler: (() => void)): void;
    onGestureProgress(handler: ((payload: {x: number, y: number, scale: number, angle: number, dx: number, dy: number}) => void)): void;
    onGestureStart(handler: (() => void)): void;
    onHover(handler: ((payload: {x: number, y: number, target: InputTarget}) => void)): void;
    onKeyPress(key: KeyName|KeyCode|Array<KeyName|KeyCode>|string, handler: () => void): void;
    onLayoutComplete(listener: ((payload: { name: string, ids: Array<NodeId>, positions: { before: Array<NodePosition>, affter: Array<NodePosition>}}) => void)): void;
    onLayoutStart(listener: ((payload: { name: string, ids: Array<NodeId>}) => void)): void;
    onMouseButtonDown(handler: ((payload: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource}) => void)): void;
    onMouseButtonUp(handler: ((payload: {x: number, y: number, target: InputTarget, button: MouseButton, source: InputSource}) => void)): void;
    onMouseMove(handler: ((payload: {x: number, y: number, dx: number, dy: number, source: InputSource}) => void)): void;
    onMouseWheel(handler: ((payload: {x: number, y: number, delta: number}) => void)): void;
    onNodeDataChange(listener: ((evt: {changes: Array<{property: PropertyPath, nodes: NodeList, previousValues: Array<any>, newValues: Array<any>}>}) => void)): void;
    onNodeDragEnd(listener: ((payload: {nodes: NodeList, start: Array<{x: number, y: number}>, end: Array<{x: number, y: number}>}) => void)): void;
    onNodeDragProgress(listener: ((payload: {nodes: NodeList}) => void)): void;
    onNodeDragStart(listener: ((payload: {nodes: NodeList}) => void)): void;
    onNodesAdded(handler: ((payload: {nodes: NodeList}) => void)): void;
    onNodesClassAdded(className: string, handler: ((payload: {nodes: NodeList}) => void)): void;
    onNodesClassRemoved(className: string, handler: ((payload: {nodes: NodeList}) => void)): void;
    onNodesConnected(listener: ((evt: {source: Node, target: Node, edge: Edge }) => void)): void;
    onNodesRemoved(handler: ((payload: {nodes: NodeList}) => void)): void;
    onNodesSelected(handler: ((payload: {nodes: NodeList}) => void)): void;
    onNodesUnselected(handler: ((payload: {nodes: NodeList}) => void)): void;
    onUnhover(handler: ((payload: {x: number, y: number, target: InputTarget}) => void)): void;
    onViewChanged(handler: (() => void)): void;
    onZoomProgress(handler: (() => void)): void;
    removeListener(listener: () => void): void;
  };

  'export': {
    csv(parameters: {what: "nodes"|"edges", dataProperties?: Array<PropertyPath>, separator?: string, textSeparator?: '"'|"'", nodes?: NodeCollection, edges?: EdgeCollection, filter?: "visible"|"raw"|"all", download?: boolean, filename?: string}|"nodes"|"edges"): Promise<string>;
    gexf(parameters?: {creator?: string, description?: string, nodes?: NodeCollection, edges?: EdgeCollection, filter?: "visible"|"raw"|"all", styles?: "all"|"none"|"original", download?: boolean, filename?: string}): Promise<string>;
    gif(parameters?: {width?: number, height?: number, background?: Color, texts?: boolean, textWatermark?: {content?: string, fontFamily?: string, fontSize?: number, fontStyle?: "bold"|"italic", fontColor?: Color, repeat?: boolean, angle?: number, alpha?: number, space?: number, x?: number, y?: number}, imageWatermark?: {url?: string, width?: string, height?: string, repeat?: string, angle?: string, alpha?: string, space?: string, x?: string, y?: string}, download?: boolean, filename?: string, legend?: boolean}): Promise<string>;
    graphml(parameters?: {graphId?: string, directedEdges?: boolean, nodes?: NodeCollection, edges?: EdgeCollection, filter?: "visible"|"raw"|"all", styles?: "all"|"none"|"original", download?: boolean, filename?: string}): Promise<string>;
    jpg(parameters?: {width?: number, height?: number, background?: Color, texts?: boolean, textWatermark?: {content?: string, fontFamily?: string, fontSize?: number, fontStyle?: "bold"|"italic", fontColor?: Color, repeat?: boolean, angle?: number, alpha?: number, space?: number, x?: number, y?: number}, imageWatermark?: {url?: string, width?: string, height?: string, repeat?: string, angle?: string, alpha?: string, space?: string, x?: string, y?: string}, download?: boolean, filename?: string, legend?: boolean}): Promise<string>;
    json(parameters?: {pretty?: boolean, nodes?: NodeCollection, edges?: EdgeCollection, filter?: "visible"|"raw"|"all", styles?: "all"|"none"|"original", download?: boolean, filename?: string}): Promise<string>;
    png(parameters?: {width?: number, height?: number, background?: Color, texts?: boolean, textWatermark?: {content?: string, fontFamily?: string, fontSize?: number, fontStyle?: "bold"|"italic", fontColor?: Color, repeat?: boolean, angle?: number, alpha?: number, space?: number, x?: number, y?: number}, imageWatermark?: {url?: string, width?: string, height?: string, repeat?: string, angle?: string, alpha?: string, space?: string, x?: string, y?: string}, download?: boolean, filename?: string, legend?: boolean}): Promise<string>;
    svg(parameters?: {width?: number, height?: number, background?: Color, texts?: boolean, download?: boolean, filename?: string}): Promise<string>;
    tiff(parameters?: {width?: number, height?: number, background?: Color, texts?: boolean, textWatermark?: {content?: string, fontFamily?: string, fontSize?: number, fontStyle?: "bold"|"italic", fontColor?: Color, repeat?: boolean, angle?: number, alpha?: number, space?: number, x?: number, y?: number}, imageWatermark?: {url?: string, width?: string, height?: string, repeat?: string, angle?: string, alpha?: string, space?: string, x?: string, y?: string}, download?: boolean, filename?: string, legend?: boolean}): Promise<string>;
    xlsx(parameters?: {what?: "nodes"|"edges", dataProperties?: Array<PropertyPath>, nodes?: NodeCollection, edges?: EdgeCollection, filter?: "visible"|"raw"|"all", download?: boolean, filename?: string}|"nodes"|"edges"): Promise<Blob>;
  };

  generate: {
    balancedTree(options?: {children?: number, height?: number}): Promise<RawGraph>;
    barabasiAlbert(options?: {nodes?: number, m0?: number, m?: number}): Promise<RawGraph>;
    erdosRenyi(options?: {nodes?: number, p?: number, edges?: number}): Promise<RawGraph>;
    grid(options?: {rows?: number, columns?: number}): Promise<RawGraph>;
    path(options?: {length?: number}): Promise<RawGraph>;
    random(options?: {nodes?: number}): Promise<RawGraph>;
  };

  geo: {
    disable(options?: GeoModeOptions): Promise<void>;
    enable(options?: GeoModeOptions): Promise<void>;
    enabled(): boolean;
    getCenter(): GeoCoordinate;
    getView(): MapPosition;
    getZoom(): number;
    resetCoordinates(): void;
    setCenter(latitude: number, longitude: number): void;
    setOptions(options?: GeoModeOptions): void;
    setView(latitude: number, longitude: number, zoom: number): void;
    setZoom(zoom: number): void;
    toggle(options?: GeoModeOptions): Promise<void>;
    updateCoordinates(): void;
  };

  keyboard: {
    isKeyPressed(key: KeyName|KeyCode): boolean;
  };

  layouts: {
    concentric(params: {nodes?: Array<NodeId>|NodeList, duration?: number, skipTextDrawing?: boolean, onSync?: (() => void), onEnd?: (() => void), useWebWorker?: boolean, locate?: boolean|LocateOptions, centralNode: NodeId|Node, centerX?: number, centerY?: number, sortBy?: string, clockWise?: boolean, allowOverlap?: boolean, circleHopRatio?: number}): Promise<void>;
    forceLink(params: {nodes?: Array<NodeId>|NodeList, duration?: number, skipTextDrawing?: boolean, onSync?: (() => void), onEnd?: (() => void), useWebWorker?: boolean, locate?: boolean|LocateOptions, scalingRatio?: number, gravity?: number, edgeWeightInfluence?: number, linLogMode?: boolean, outboundAttractionDistribution?: boolean, strongGravityMode?: boolean, slowDown?: number, alignNodeSiblings?: boolean, nodeSiblingsScale?: number, nodeSiblingsAngleMin?: number, autoStop?: boolean, maxIterations?: number, avgDistanceThreshold?: number, startingIterations?: number, iterationsPerRender?: number, barnesHutOptimize?: boolean, barnesHutTheta?: number, nodeMass?: ((node:Node, degree:number) => number), edgeWeight?: ((edge:Edge) => number)}): Promise<void>;
    grid(params: {nodes?: Array<NodeId>|NodeList, duration?: number, skipTextDrawing?: boolean, onSync?: (() => void), onEnd?: (() => void), useWebWorker?: boolean, locate?: boolean|LocateOptions, rows?: number, cols?: number, sortBy?: string, sortFallbackValue?: any, reverse?: boolean}): Promise<void>;
    hierarchical(params: {nodes?: Array<NodeId>|NodeList, duration?: number, skipTextDrawing?: boolean, onSync?: (() => void), onEnd?: (() => void), useWebWorker?: boolean, locate?: boolean|LocateOptions, directed?: boolean, multigraph?: boolean, compound?: boolean, rankdir?: string}): Promise<void>;
    radial(params: {nodes?: Array<NodeId>|NodeList, duration?: number, skipTextDrawing?: boolean, onSync?: (() => void), onEnd?: (() => void), useWebWorker?: boolean, locate?: boolean|LocateOptions, centralNode: Node|NodeId, centerX?: number, centerY?: number, allowOverlap?: boolean, repulsion?: number, radiusDelta?: number, radiusRatio?: number, nodeGap?: number, maxIterations?: number, iterationsPerRender?: number, renderSteps?: boolean, epsilon?: number}): Promise<void>;
    stop(): void;
  };

  parse: {
    gexf(content: string): Promise<RawGraph>;
    gexfFromUrl(url: string): Promise<RawGraph>;
    janus(content: any): Promise<RawGraph>;
    json(content: string): Promise<RawGraph>;
    jsonFromUrl(url: string): Promise<RawGraph>;
    neo4j(content: any): Promise<RawGraph>;
  };

  pathfinding: {
    astar(source: Node|NodeId, target: Node|NodeId, options?: {filter?: "visible"|"raw"|"all", pathLengthFunction?: ((node1: Node, node2: Node) => number), heuristicLengthFunction?: ((node1: Node, node2: Node) => number), directed?: boolean}): NodeList;
    dijkstra(source: Node|NodeId, target: Node|NodeId, options?: {filter?: "visible"|"raw"|"all", pathLengthFunction?: ((node1: Node, node2: Node) => number), directed?: boolean}): NodeList;
    dijkstraBig(source: Node|NodeId, target: Node|NodeId, options?: {filter?: "visible"|"raw"|"all", pathLengthFunction?: ((node1: Node, node2: Node) => number), directed?: boolean}): NodeList;
  };

  rules: {
    map(options: {field: PropertyPath, values?: {[key: string]: any}, fallback?: any|Array<any>}): ((elt: Node|Edge) => any);
    slices(options: {field: PropertyPath, values: {nbSlices: number, min: number, max: number}|Array<any>, stops?: {min: number, max: number}|Array<number>, fallback?: any, reverse?: boolean}): ((elt: Node|Edge) => any);
    template(template: string): ((elt: Node|Edge) => any);
  };

  schema: {
    watchEdgeNonObjectProperty(options?: WatcherOptions): NonObjectPropertyWatcher;
    watchEdgeObjectProperty(options?: WatcherOptions): ObjectPropertyWatcher;
    watchNodeNonObjectProperty(options?: WatcherOptions): NonObjectPropertyWatcher;
    watchNodeObjectProperty(options?: WatcherOptions): ObjectPropertyWatcher;
  };

  styles: {
    addEdgeRule(selector?: ((edge: Edge) => boolean), rule?: EdgeAttributesRule): EdgeRule;
    addNodeRule(selector?: ((node: Node) => boolean), rule?: NodeAttributesRule): NodeRule;
    getEdgeRules(): Array<EdgeRule>;
    getNodeRules(): Array<NodeRule>;
    setEdgeTextsVisibility(value: boolean): boolean;
    setEdgesVisibility(value: boolean): boolean;
    setHoveredEdgeAttributes(style: EdgeAttributesRule|null): void;
    setHoveredNodeAttributes(style: NodeAttributesRule|null): void;
    setNodeTextsVisibility(value: boolean): boolean;
    setNodesVisibility(value: boolean): boolean;
    setSelectedEdgeAttributes(style: EdgeAttributesRule|null): void;
    setSelectedNodeAttributes(style: NodeAttributesRule|null): void;
  };

  tools: {
    brand: {
      remove(): void;
      set(html: string, options?: {position?: "top-left"|"top-right"|"bottom-left"|"bottom-right", horizontalMargin?: number, verticalMargin?: number, className?: string}): HTMLElement;
    };

    connectNodes: {
      disable(): void;
      enable(options?: {createNodes?: boolean, condition?: ((source: Node, target: Node) => boolean), onNodeCreated?: ((node: Node) => void), onEdgeCreated?: ((edge: Edge) => void), onComplete?: ((source:Node, target: Node, edge: Edge) => void), cursorStyle?: CursorStyle, strokeColor?: Color, strokeWidth?: number, dashLength?: number}): void;
      enabled(): void;
    };

    lasso: {
      disable(): void;
      enable(options?: {strokeColor?: Color, strokeWidth?: number, fillColor?: Color|null, cursorStyle?: CursorStyle, callback?: ((payload: {nodes: NodeList}) => void)}): void;
      enabled(): boolean;
    };

    legend: {
      disable(): void;
      enable(options?: {position?: "bottom"|"top"|"left"|"right", widgetWidth?: number, fontFamily?: string, fontSize?: number, fontColor?: Color, titleFontSize?: number, titleFontColor?: Color, titleMaxLength?: number, titleTextAlign?: "left"|"center", shapeColor?: Color, backgroundColor?: Color, borderColor?: Color, borderRadius?: number, borderWidth?: number, innerMargin?: number, outerMargin?: number, circleStrokeWidth?: number, titleFunction?: ((propertyPath: Array<string>) => string)}): void;
      enabled(): boolean;
    };

    rectangleSelect: {
      disable(): void;
      enable(options?: {strokeColor?: Color, strokeWidth?: number, fillColor?: Color|null, cursorStyle?: CursorStyle, callback?: ((payload: {nodes: NodeList, edges: EdgeList}) => void)}): void;
      enabled(): boolean;
    };

    resize: {
      disable(): void;
      enable(options?: {cursor?: CursorStyle, color?: Color, lineWidth?: number, handleSize?: number, detectionMargin?: number, snappingRatio?: number, nbNodesToSnapTo?: number, previewColor?: Color, sizeIndicatorColor?: Color, sizeIndicatorOffset?: number, sizeIndicatorWidth?: number, sizeIndicatorThickness?: number}): void;
      enabled(): boolean;
    };

    rewire: {
      disable(): void;
      enable(options?: {color?: Color, radius?: number, cursorOnHover?: CursorStyle, cursorOnDrag?: CursorStyle}): void;
      enabled(): boolean;
    };

    snapping: {
      disable(): void;
      enable(options?: {enabled?: Boolean, tolerance?: Number, centerSnapDistance?: Number, sideSnapDistanceFactor?: Number, guidelineWidth?: Number, guidelineColor?: Color, preferredDistance?: {enabled?: Boolean, ratio?: Number, tolerance?: Number, lineWidth?: Number, lineColor?: Color}, neighbours?: {enabled?: Boolean, lineWidth?: Number, lineColor?: Color, tolerance?: Number, offset?: Number}}): void;
    };

    tooltip: {
      onBackgroundClick(handler: (() => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onBackgroundDoubleClick(handler: (() => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onBackgroundRightClick(handler: (() => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onEdgeClick(handler: ((edge: Edge) => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onEdgeDoubleClick(handler: ((edge: Edge) => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onEdgeHover(handler: ((edge: Edge) => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onEdgeRightClick(handler: ((edge: Edge) => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onNodeClick(handler: ((node: Node) => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onNodeDoubleClick(handler: ((node: Node) => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onNodeHover(handler: ((node: Node) => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      onNodeRightClick(handler: ((node: Node) => (string|Promise<string>)), options?: {position?: "top"|"bottom"|"left"|"right"|"cssDefined", autoAdjust?: boolean, delay?: number, className?: string}): void;
      refresh(): void;
    };
  };

  transformations: {
    addEdgeGrouping(options?: {selector?: ((edge: Edge) => boolean), groupIdFunction?: ((edge: Edge) => string), generator?: ((edges: Array<Edge>, groupId: string, ruleId: TransformationId) => EdgeDataAndAttributes), ignoreEdgeDirection?: boolean}): Promise<TransformationId>;
    addNodeGrouping(options?: {selector?: ((node: Node) => boolean), groupIdFunction?: ((node: Node) => string), nodeGenerator?: ((nodes: Array<Node>, groupId: string, ruleId: TransformationId) => NodeDataAndAttributes), edgeGenerator?: ((edges: Array<Edge>, groupId: string, ruleId: TransformationId) => EdgeDataAndAttributes), ignoreEdgeDirection?: boolean, duration?: number, groupSelfLoopEdges?: boolean}): Promise<TransformationId>;
    clear(callback?: (() => any)): void;
    getIndex(transformationId: TransformationId): number;
    remove(transformationId: TransformationId, callback?: (() => any)): void;
    removeNodeGrouping(transformationId: TransformationId, duration ?: number): Promise<void>;
    setIndex(transformationId: TransformationId, index: number, callback?: (() => any)): void;
  };

  view: {
    forceResize(): void;
    get(): {x: number, y: number, zoom: number, angle: number};
    getAngle(): number;
    getCenter(): {x: number, y: number};
    getElementAt(pos: {x: number, y: number}): Node|Edge|null;
    getGraphBoundingBox(): BoundingBox;
    getSize(): { width: number, height: number };
    getZoom(): number;
    graphToScreenCoordinates(coordinates: {x: number, y: number}): {x: number, y: number};
    isFullScreen(): boolean;
    locateGraph(options?: LocateOptions): Promise<void>;
    locateRawGraph(graph: RawGraph, options?: LocateOptions): Promise<void>;
    move(offset: {x: number, y: number}, options?: AnimationOptions): Promise<void>;
    rotate(angle: number, options?: AnimationOptions): Promise<void>;
    screenToGraphCoordinates(coordinates: {x: number, y: number}): {x: number, y: number};
    set(view: {x?: number, y?: number, zoom?: number, angle?: number}, options?: AnimationOptions): Promise<void>;
    setAngle(angle: number, options?: AnimationOptions): Promise<void>;
    setCenter(center: {x: number, y: number}, options?: AnimationOptions): Promise<void>;
    setFullScreen(value: boolean): void;
    setZoom(zoom: number, options?: AnimationOptions): Promise<void>;
    zoomIn(modifier?: number, options?: AnimationOptions): Promise<void>;
    zoomOut(modifier?: number, options?: AnimationOptions): Promise<void>;
  };
}

export interface Node {
  isNode: boolean;

  addClass(className: string, animationDuration?: number): void;
  getAdjacentEdges(options?: {direction?: "both"|"in"|"out", filter?: "visible"|"raw"|"all"}): EdgeList;
  getAdjacentNodes(options?: {includeSources?: boolean, direction?: "both"|"in"|"out", filter?: "visible"|"raw"|"all"}): NodeList;
  getAttribute(attributeName: PropertyPath): any;
  getAttributes(attributeNames?: Array<PropertyPath>): NodeAttributes;
  getBoundingBox(): BoundingBox;
  getData(property?: PropertyPath): any;
  getDegree(direction?: "in"|"out"|"both"): number;
  getGeoCoordinates(): GeoCoordinate;
  getId(): void;
  getPosition(): {x: number, y: number};
  hasClass(className: string): boolean;
  isSelected(): boolean;
  locate(options?: LocateOptions): Promise<void>;
  pulse(options?: {number?: number, duration?: number, interval?: number, startColor?: Color|"inherit", endColor?: Color|"inherit", width?: number, startRatio?: number, endRatio?: number}): void;
  removeClass(className: string, animationDuration?: number): void;
  resetAttributes(attributeNames?: Array<PropertyPath>): void;
  setAttribute(attribute: PropertyPath, value: any, duration?: number): Promise<Node>;
  setAttributes(attributes: NodeAttributes, duration?: number): Promise<Node>;
  setData(property?: PropertyPath, value?: any|((node: Node) => any)): Node;
  setGeoCoordinates(coordinates: GeoCoordinate): Promise<Node>;
  setSelected(active: boolean): void;
}

export interface Edge {
  isNode: boolean;

  addClass(className: string, animationDuration?: number): void;
  getAttribute(attributeName: PropertyPath): any;
  getAttributes(attributeNames?: Array<PropertyPath>): EdgeAttributes;
  getBoundingBox(): BoundingBox;
  getData(property?: PropertyPath): any;
  getExtremities(): NodeList;
  getId(): void;
  getSource(): Node;
  getTarget(): Node;
  hasClass(className: string): boolean;
  isSelected(): boolean;
  locate(options?: LocateOptions): Promise<void>;
  pulse(options?: {number?: number, duration?: number, interval?: number, startColor?: Color|"inherit", endColor?: Color|"inherit", width?: number, startRatio?: number, endRatio?: number}): void;
  removeClass(className: string, animationDuration?: number): void;
  resetAttributes(attributeNames?: Array<PropertyPath>): void;
  setAttribute(attribute: PropertyPath, value: any, duration?: number): Promise<Edge>;
  setAttributes(attributes: EdgeAttributes, duration?: number): Promise<Edge>;
  setData(property?: PropertyPath, value?: any|((edge: Edge) => any)): Edge;
  setSelected(active: boolean): void;
  setSource(source: Node): void;
  setTarget(target: Node): void;
}

export interface NodeList {
  isNode: boolean;
  size: number;

  addClass(className: string, animationDuration?: number): void;
  concat(nodes: NodeList): NodeList;
  dedupe(): NodeList;
  fillData(property?: PropertyPath|any, value?: any): NodeList;
  filter(callback: ((node: Node, index: number) => boolean)): NodeList;
  forEach(callback: ((node: Node, index: number) => void)): void;
  get(index: number): Node;
  getAdjacentEdges(options?: {direction?: "both"|"in"|"out", filter?: "visible"|"raw"|"all"}): EdgeList;
  getAdjacentNodes(options?: {includeSources?: boolean, direction?: "both"|"in"|"out", filter?: "visible"|"raw"|"all"}): NodeList;
  getAttribute(attributeName: PropertyPath): Array<any>;
  getAttributes(attributes?: Array<PropertyPath>): NodeAttributes;
  getBoundingBox(): BoundingBox;
  getData(property?: PropertyPath): Array<any>;
  getDegree(direction?: "in"|"out"|"both"): Array<number>;
  getGeoCoordinates(): Array<GeoCoordinate>;
  getId(): void;
  getPosition(): {x: number, y: number};
  includes(node: Node): boolean;
  isSelected(): Array<boolean>;
  locate(options?: LocateOptions): Promise<void>;
  map(callback: ((node: Node, index: number) => any)): Array<any>;
  pulse(options?: {number?: number, duration?: number, interval?: number, startColor?: Color|"inherit", endColor?: Color|"inherit", width?: number, startRatio?: number, endRatio?: number}): void;
  reduce(callback: ((accumulator: any, currentValue: Node, index: number) => any), initialValue: any): any;
  removeClass(className: string, animationDuration?: number): void;
  resetAttributes(attributes?: Array<PropertyPath>): void;
  setAttributes(attributes: NodeAttributes|Array<NodeAttributes>, duration?: number): Promise<NodeList>;
  setData(property?: PropertyPath, values?: Array<any>|((node: Node) => any)): NodeList;
  setGeoCoordinates(coordinates: Array<GeoCoordinate>): Promise<NodeList>;
  setSelected(active: boolean|Array<boolean>): void;
  slice(start?: void, end?: void): NodeList;
  toArray(): Array<Node>;

  prototype: {
    inverse(): NodeList;
    setAttribute(attribute: PropertyPath, values: any|Array<any>, duration?: number): Promise<NodeList>;
  };
}

export interface EdgeList {
  isNode: boolean;
  size: number;

  addClass(className: string, animationDuration?: number): void;
  concat(edges: EdgeList): EdgeList;
  dedupe(): EdgeList;
  fillData(property?: PropertyPath, value?: any): EdgeList;
  filter(callback: ((edge: Edge, index: number) => boolean)): EdgeList;
  forEach(callback: ((edge: Edge, index: number) => void)): void;
  get(index: number): Edge;
  getAttribute(attributeName: PropertyPath): Array<any>;
  getAttributes(attributes?: Array<PropertyPath>): EdgeAttributes;
  getBoundingBox(): BoundingBox;
  getData(property?: PropertyPath): Array<any>;
  getExtremities(): NodeList;
  getId(): void;
  getSource(): NodeList;
  getTarget(): NodeList;
  includes(edge: Node): boolean;
  isSelected(): Array<boolean>;
  locate(options?: LocateOptions): Promise<void>;
  map(callback: ((edge: Edge, index: number) => any)): Array<any>;
  pulse(options?: {number?: number, duration?: number, interval?: number, startColor?: Color|"inherit", endColor?: Color|"inherit", width?: number, startRatio?: number, endRatio?: number}): void;
  reduce(callback: ((accumulator: any, currentValue: Edge, index: number) => any), initialValue: any): any;
  removeClass(className: string, animationDuration?: number): void;
  resetAttributes(attributes?: Array<PropertyPath>): void;
  setAttributes(attributes: EdgeAttributes|Array<EdgeAttributes>, duration?: number): Promise<EdgeList>;
  setData(property?: PropertyPath, values?: Array<any>|((edge: Edge) => any)): EdgeList;
  setSelected(active: boolean|Array<boolean>): void;
  slice(start?: void, end?: void): EdgeList;
  toArray(): Array<Edge>;

  prototype: {
    inverse(): EdgeList;
    setAttribute(attribute: PropertyPath, values: any|Array<any>, duration?: number): Promise<NodeList>;
  };
}

export interface NodeFilter {
  NodeFilter: {
    whenApplied(f: () => void): Promise<any>;
  };
}

export interface EdgeFilter {
  EdgeFilter: {
    whenApplied(f: () => void): Promise<any>;
  };
}

export interface NodeRule {
  delete(): Promise<void>;
  getIndex(): number;
  refresh(): Promise<void>;
  setIndex(index: number): void;
  whenApplied(f: () => void): Promise<any>;
}

export interface EdgeRule {
  EdgeRule: {
    whenApplied(f: () => void): Promise<any>;
  };
}

export interface PropertyInformation {
  getBoundaries(): null|{min: number, max: number};
  getCount(): number;
  getType(): 'any'|'number'|'undefined';
  getValueCount(value: any): number;
  getValues(): Array<any>;
  isNode(): boolean;
}

export interface ObjectPropertyWatcher {
  getPath(): Array<string>;
  getProperties(): Array<string>;
  getPropertyInfo(name: string): PropertyInformation|null;
  kill(): void;
  onPropertyAdded(handler: ((property: string) => void)): ObjectPropertyWatcher;
  onPropertyRemoved(handler: ((property: string) => void)): ObjectPropertyWatcher;
  onPropertyUpdated(handler: ((property: string, info: PropertyInformation) => void)): ObjectPropertyWatcher;
}

export interface NonObjectPropertyWatcher {
  getPath(): Array<string>;
  getPropertyInfo(): PropertyInformation;
  kill(): void;
  onUpdate(handler: ((info: PropertyInformation) => void)): void;
}