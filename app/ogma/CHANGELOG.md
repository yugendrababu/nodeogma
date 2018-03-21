# Ogma.js changelog

Please report bugs at support@linkurio.us.

## 2.1.0

### Improvements

#### General

* &#35;770 Methods `setData` and `fillData` now return the object on which it was called.
* &#35;792 Added method `reverse()` on NodeList and EdgeList, which retrieves a new List containing all the nodes that are not in the original list.
* &#35;797 Added a `setAttribute` method on the `(Node|Edge)(List)?` classes, which allows to set a single attribute.

#### Events

* &#35;781 New event `onViewChanged` that trigger after a view zoom, panning or rotation has been completed.
* &#35;795 Added `onBeforeNodesAdded`, `onBeforeNodesRemoved`, `onBeforeEdgesAdded`, `onBeforeEdgesRemoved` events to manipulate the nodes and edges data before they are removed from graph storage. `onNodesAdded`, `onNodesRemoved`, `onEdgesAdded`, `onEdgesRemoved` now trigger after the nodes/edges are added/removed.

#### Filters

* &#35;787 Methods `addNodeFilter` and `addEdgeFilter` now return a `Filter` object instead of a Promise. It provides the methods `whenApplied(f)`, `refresh()`, and `delete()`. The id of the filter is no longer accessible.
* &#35;787 Removed methods `remove(Node|Edge)Filter` and `clear(Node|Edge)Filters`.
* &#35;787 New methods `getNodeFilters()` and `getEdgeFilters()`, which retrieve the list of node/edge filters currently applied.

#### Snapping

* &#35;799 Removed snapping options from global Ogma options and limited it to the tool.

#### Styles

* &#35;787 Methods `addNodeRule` and `addEdgeRule` now return a `StyleRule` object instead of a Promise. It provides the methods `whenApplied(f)`, `refresh()`, `getIndex()`, `setIndex(i)` and `delete()`. The id of the rule is no longer accessible.
* &#35;787 Removed methods `get(Node|Edge)RuleIndex`, `set(Node|Edge)RuleIndex`, `remove(Node|Edge)Rule` and `clear(Node|Edge)Rules`.
* &#35;787 New methods `getNodeRules()` and `getEdgeRules()`, which retrieve the list of node/edge rules currently applied.

### Bug fixes

#### General

* &#35;773 Fixed a glitch when amimating some nodes in WebGL.
* &#35;802 Fixed bug where edges were not updated when one of their ends' radius changes.

#### ConnectNodes

* &#35;784 Fixed bug that made the user only able to create self-loop edges.

#### Tooltip

* &#35;798 Fixed bug that prevented tooltips created with `tooltip.on*Click` methods from being displayed.

### Other

#### General

* &#35;803 The build is now also available in the `ogma-release` repository code, not only in the release zips.

## 2.0.4-beta

### Improvements

#### General

* &#35;763 Added options `minimumWidth` and `minimumHeight`, which indicate the minimum dimensions of the canvas in case the container is too small. Default is 300x300.
* &#35;769 Changed `setStyle` to `setAttributes`, `resetStyle` to `resetAttributes`, `getStyle` to `getAttribute`. Introduced new method `getAttributes`, to retrieve multiple attributes at once. `x` and `y` properties are now attributes are are assignable using `setAttributes`. `setPosition` is removed, `setAttributes` can be used instead with the exact same parameters. `getPosition` is kept, but can be achieved using `getAttributes(['x', 'y'])`. The `*Style` methods will still work, but are removed from the documentation and deprecated.
* &#35;769 `setAttributes` will now by default wait for the current animation to finish before being applied. A `skipCurrentAnimation` option in the second parameter of `setAttributes` allow to force the attribute change to take place immediatly.
* &#35;769 New method `getAnimation()`, that returns a Promise that resolves when the Node/Edge/NodeList/EdgeList's current animation finishes.

#### Layouts

* &#35;764 Added a `locate` option to all layouts to run centering animation simultaneously with the nodes re-positioning.

### Bug fixes

#### Hover

* &#35;758 Passing `null` to `ogma.styles.setHoveredNodeAttributes()` (and `setHoveredNodeAttributes`) correctly removes all attribute changes.

#### Layouts

* &#35;745 Added a `sortFallbackValue` option for grid layout.

#### Legend

* &#35;755 Now correctly takes the devicePixelRatio into account.
* &#35;756 Fixed bug where the legend would not show up if it was enabled in a chunk of code asynchronous to Ogma initialization.

#### Selection

* &#35;758 Passing `null` to `ogma.styles.setSelectedNodeAttributes()` (and `setSelectedEdgeAttributes`) correctly removes all attribute changes.

## 2.0.3-beta

### Improvements

#### Filters

* &#35;744 Filter methods `addNodeFilter`, `removeNodeFilter` and `clearNodeFIlters` (same for edges) now returns a Promise, which resolve when the filter is effectively applied/removed.

#### Styles

* &#35;752 It is now possible to specify a function in hover/selection/classes styles.

#### Tooltip

* &#35;747 Changed behavior of the `autoAdjust` option, it now makes so the tooltip fits inside the container and does not overlap with the node (when it is a node tooltip).

### Bug fixes

#### Legend

* &#35;748 Fixed bug where size indicator for nodes and edges would not be displayed properly.
* &#35;748 Widgets are now ordered by name rather than by height.

#### Styles

* &#35;746 Fixed bug where pie-charts with two colors would not be displayed correctly when the graph is rotated.
* &#35;749 Fixed bug where pie charts rules would not correctly be applied after a filter.

## 2.0.2-beta

### Improvements

#### General

* &#35;718 Specifying an id is now optional when adding a node or edge (if ommited, a random id will be assigned).
* &#35;718 When adding an edge, its source/target can now be indicated using the node object itself rather than its id.
* &#35;723 Added method `ogma.getHoveredElement()` to retrieve the currently hovered element.
* &#35;723 Added method `ogma.view.getElementAt({x, y})` to retrieve the element at the specified coordinates.

#### Grouping

* &#35;725 Grouping now has an asynchronous API and supports animation for node grouping.

#### View

* &#35;728 Added method `ogma.view.forceResize()` to force Ogma to refresh the view according to the container's visibility and dimensions.

### Bug fixes

#### Parse.neo4j

* &#35;721 Fixed a crash caused by optional matches.

## 2.0.1-beta

### Bug fixes

#### Texts

* &#35;709 Node secondary texts are now properly detected when hovered by the mouse.

## 2.0.0-beta

This release brings multiple substantial improvements in terms of features, API and performances. It notably reduces memory consumption by 36% on average. It is not backward-compatible with Ogma v1.x.

The main objectives behind this major version are:

- Make the API easier to use, notably by adding classes to work with collections of nodes/edges
- Provide a more powerful API for styles
- Adding an API to manipulate nodes/edges data while preserving consistency across all features.
- Making so filters have an impact on node/edge collection retrieval
- Improving performance, especially memory consumption

### General

- The API is reorganized into the following namespaces: `events`, `export`, `generate`, `geo`, `keyboard`, `layouts`, `parse`, `pathfinding`, `rules`, `schema`, `styles`, `tools`, `transformations`, `view`.
- Settings are now mostly limited to configure interaction tools and their display.
- Settings are now managed through the `ogma.setOptions()` method.

### Graph

- The `NodeList` and `EdgeList` classes have been introduced and allow the user to manipulate collections of nodes/edges.
- The properties of nodes and edges are not writable anymore (e.g. `color = ...`). All actions on nodes/edges are now performed through methods (e.g `node.setSelected(true)` instead of `node.active = true`).
- Methods than return a list of nodes/edges (e.g `nodes.getAdjacentNodes()`) now take filtered nodes/edges into account, and won't return them.

### Styling

In Ogma v1, styles could be configured in multiple places and it was often hard to know where to find a specific visual property.

- All the styling features are now managed in the `ogma.styles` namespace.
- Style of a specific node/edge can be manipulated through the `node.setStyle()` method rather than directly using properties such as `color`.
- All visual properties can now be configured individually for each node/edge.
- No more default value settings. There is now a system (non-modifiable) default value for all visual properties. Users can add rules if they wish to apply their own values.
- The `design` module has been removed and is replaced by a generic rule system, that can be used to configure any style property.
- When adding a node/edge, all of its style properties must be contained in the `style` property instead of being at the root object (e.g. `node.color` is illegal, we now use `node.styles.color`).
- A concept of "class" has been added in the spirit of CSS classes. Classes can be manipulated through the `addClass()` and `removeClass()` methods. Their goal is to provide a way to temporarily alter the visual display of nodes/edges without overriding their original style information.
- The `size` property has been renamed to `radius` for nodes, and `width` for edges.

### Data

Ogma now provides an easy to use API to manipulate the data of nodes & edges instead of just having a `data` property on the nodes/edges. It allows Ogma to:

- Keep track of the type and different values for a given data property.
- Detect when a property is added or removed across the graph.
- Update the styling rules automatically, instead of the need to trigger the updates manually.


### Events

- Events are no longer named, instead each of them has its own methods in the `events` namespace (like `ogma.events.onNodesSelected()`).
- Removing an event listener is now done through the method `ogma.events.removeEventListener()`, which unbind the provided function from all events it was bound to.
- An event payload is now always a single object.

### DSL

The Ogma DSL (Domain Specific Language), used for filtering and grouping, has been removed. 
They now only work with regular JavaScript functions.

### Grouping

- Grouping has been rewritten to fix conflicts with other features.
- It is now available from the `transformations` namespace, which will provide similar features.
- Grouping now work by providing a function that indicate what nodes/edges should be grouped together and how.
- This feature is not stable yet, and will evolve according to user feedback. 

### Tools

We’ve added the following graph manipulation tools:

- Rectangle selection
- Edge rewiring
- Node resizing

### Performance

Memory consumption and graph loading time have both been reduced by about 36% on average.
## 1.6.18

### Bug fixes

#### Design

* &#35;724 When assigning colors based on a quantitative mapping, fixed bug where a string that can be parsed as a number would not be treated as a number.

#### Neo4j

* &#35;722 Fixed a bug that caused a crash when response queries contain optional values.

## 1.6.17

### Bug fixes

#### General

* &#35;715 Fixed bug that would prevent the `imgCrossOrigin` property to be handled correctly when exporting.

## 1.6.16

### Improvements

#### Tooltips

* &#35;564 Node tooltips position is now calculated based on the node coordinates and size.

### Bug fixes

#### Keyboard

* &#35;714 Added a `'cmd'` key that can be used with `keyboard.isPressed` and `keyboard.bind`.
* &#35;714 `'ctrl'` no longer identifies the `cmd` key on Mac.

#### Touch

* &#35;708 Fixed bug where user tap would not be detected.

## 1.6.15

### Bug fixes

#### Coalescence

* &#35;694 Fixed bug where `ungroupNodes()` would not work if one node was outside of a group.

#### Geo

* &#35;692 Fixed bug when the maximum and minimum zoom levels were not restored after the usage of geo mode.

#### Groups

* &#35;679 Fixed the bug which caused jumpy animations of edges while ungrouping.
* &#35;691 Fixes a bug when removing nodes adjacent to the meta-nodes would make un-grouping impossible.
* &#35;693 Fixed `ogma.groups.reset()` method.

#### Lasso

* &#35;654 Fixed bug with the lasso outline remaining on the screen if no nodes were selected.

## 1.6.14

### Bug fixes

#### Badges

* &#35;618 Fixed circle badge sizes on retina screens.

#### Layouts

* &#35;634 Fixed IE11 bug in radial layout regarding the usage of typed arrays.

#### Legend

* &#35;559 Fixed the bug when legends layout would cause an exception if the container is hidden and the window is resized.

#### Pulses

* &#35;643 Fixed the bug with edges appearing on top of the node in canvas renderer.

#### Render

* &#35;627 Fixed bug where straight tapered edges would not be shown when being animated if the source and target are at the same location.
* &#35;633 Fixed the node icons rendering on Retina displays.

## 1.6.13

### Improvements

#### Neo4j

* &#35;610 Variable-length and paths queries are now supported.

### Bug fixes

#### Geo

* &#35;604 Fixed multiple bugs with coordinate assignment and when resetting the coordinates.

#### Groups

* &#35;614 Fixes the bug when user couldn't ungroup the nodes after having removed some of the edges attached to the nodes in the group.

#### Keyboard

* &#35;608 Fixed bug where event 'keyboard.keyDown' was fired instead of 'keyboard.keyUp'.

#### Render

* &#35;609 Fixed glitch happening during curved tapered edge animation.

## 1.6.12

### Bug fixes

#### General

* &#35;606 Fixed bug where the camera wouldn't be adjusted when resizing the container.

#### Geo

* &#35;603 Fixed bug where Ogma would crash if exiting the geo mode before all tiles are loaded.

#### Touch

* &#35;601 Fixed bug where touch events would be disabled.

## 1.6.11

### Bug fixes

#### Export

* &#35;579 Fixed the bug with node icons missing from the export.
* &#35;588 Fixed SVG export.

#### Geo

* &#35;592 Fixes the positioning, when one or more nodes have no geographical coordinates and are therefore hidden.

#### Groups

* &#35;549 Now grouped and hidden nodes can safely be removed and the edges, connected to them programmatically, are correctly re-attached to the meta-nodes.

#### Layouts

* &#35;591 Fixes ForceLink layout regression that affected incremental layouts, the nodes barycenter takes the pinned nodes into account when calculating the barycenter.

#### Styles

* &#35;581 Introduced an option to disregard outer stroke width while positioning the text labels.

## 1.6.10

### Bug fixes

#### Export

* &#35;548 SVG badges are now properly exported to png.

#### Layouts

* &#35;561 Fixed the bug with disappearing labels when a layout is launched while the previous one is still working.

#### Texts

* &#35;578 Fixed bug where the text on nodes would "shift" if the text background switched to `null` (on hover or selection).

## 1.6.9

### Improvements

#### Tooltips

* &#35;565 Tooltips methods now return Promises.

### Bug fixes

#### Export

* &#35;571 Fixed the bug when Ogma crashed if the .png export was called immediately after initialization.

## 1.6.8

### Bug fixes

#### Export

* &#35;552 Overlapping text labels are not exported anymore.

## 1.6.7

### Bug fixes

#### Export

* &#35;548 SVG badges are now properly exported to png.
* &#35;552 Overlapping text labels are not exported anymore.

#### Geo

* &#35;541 Geo mode is now reading the geographical coordinates every time it gets enabled.

## 1.6.6

### Improvements

#### Geo

* &#35;511 Better zooming and panning performance.

### Bug fixes

#### Locate

* &#35;543 Hidden and grouped nodes are no more taken into account in auto positioning.

## 1.6.5

### Bug fixes

#### Brand

* &#35;531 Brand is now removed as well when `ogma.kill()` is called.

#### Mouse

* &#35;542 Fixed a bug that prevented a double click to be triggered on some browsers.

## 1.6.4

### Bug fixes

#### Groups

* &#35;528 Grouped nodes now return correct information about their neighbours.
* &#35;528 When ungrouped, nodes are now taking positions relative to the group node if it was moved.

#### Layout

* &#35;527 Grouped nodes are now working correctly with the layouts.

## 1.6.3

### Bug fixes

#### * connectNodes

* &#35;524 Fixed the bug resulting in multiple edges added at once.

#### * geo

* &#35;525 Fixed the CartoDB provider example.

## 1.6.2

### Bug fixes

#### General

* &#35;521 Fixed bug that made Ogma crash when `ogma.kill()` was called.

## 1.6.1

### Improvements

#### Badges

* &#35;513 Arrow edges which have a node with badges as target don't overlap the badges anymore.
* &#35;513 Fixed bug that caused the `positionScale` setting.

## 1.6.0

### New features

#### * layouts

* &#35;195 Added radial layout.

#### * pathfinding

* &#35;400 Added faster implementation of Dijkstra shortest path algorithm.

#### * topology

* &#35;456 Added methods to get weakly connected components of the graph, and a component to which a particular node belongs.

### Bug fixes

#### General

* &#35;491 Fixed a bug that caused a click to be triggered when the user dragged a node or edge (could cause some accidental selections/deselections).
* &#35;492 Fixes a bug when the mousewheel zooming is performed around a wrong origin point after user has switched to another tab and then returned to Ogma.

#### * import

* &#35;498 Fixed bug in 'gefx' import when the edge attributes were lost in case their class was serialized as 'edge' in the file header.

#### Design

* &#35;496 Fixed bug that caused `setNodeColor` and `setNodeShape` not to work when used with a function as parameter.

#### Graph

* &#35;493 Fixed bug where `getNodeIdList` and `getEdgeIdList` returned numerical ids as strings.
* &#35;494 Fixed TypeScript type of `graph.edges`.

#### Render

* &#35;506 Fixed bug that caused a crash in WebGL if more than 256 *different* characters were displayed.

#### Tooltip

* &#35;510 Fixed a bug that caused a crash when Ogma was cleared and a tooltip was visible.

## 1.5.3

### Improvements

#### Layouts

* &#35;475 Layouts now emit events `layout.start` and `layout.end`, containing information about the indexes of the affected nodes and their positions before and after the layout was applied.

### Bug fixes

#### Generators

* &#35;470 Fixed bug that caused the validation of parameters in asynchronous generators to be skipped.

#### Halo

* &#35;443 Fixed a bug where the halo of nodes would be displayed on top of edges when exporting to an image.

#### Hover

* &#35;467 New value `'inherit'` for settings `nodeOuterStrokeColor` and `edgeColor`. This value indicates that the outer stroke/shape color must be the same as the main node/edge color when it is hovered.

#### Layouts

* &#35;463 Fixed the bug which resulted in a race condition between layout animation and subsequent positioning with `locate.center()`.
* &#35;471 Fixed a bug which caused ForceLink layout to collapse all the nodes that had no initial positions.

#### Render

* &#35;415 Made renderers able to switch between screens with different pixel ratio seamlessly.

#### Renderer

* &#35;441 Method `ogma.render.resize()` was added to force-redraw the canvas if the visibility of container has changed.

#### Selection

* &#35;440 Fixed a bug that would cause `addNeighbors()` to add every connected nodes to the selection rather that direct neighbors.
* &#35;467 New value `'inherit'` for settings `nodeOuterStrokeColor` and `edgeColor`. This value indicates that the outer stroke/shape color must be the same as the main node/edge color when it is selected.

#### Shapes

* &#35;454 Fixed bug that caused setting `edgesAlwaysCurvy` to not work.

## 1.5.2

### Improvements

#### General

* &#35;439 Replaced multiple `any` with the right types in the TypeScript definition file.

#### Drag

* &#35;433 Event `drag.nodes` renamed to `drag.progress` + 2 new events: `drag.start` and `drag.end`.

#### Hover

* &#35;442 Setting `edgeColor` can now be `null` to indicate that the color of edges on hover must not change.

### Bug fixes

#### Geo

* &#35;427 Fixed bug that preventded geographical maps to be exported as PNG in Edge.
* &#35;449 Fixed bug that prevented Internet Explorer to use https map providers.

#### Lasso

* &#35;448 Fixed bug where clicking on a button inside the div container with the lasso being active would unselect all nodes.

#### Legend

* &#35;445 Fixed bug where the legend would sometimes not display colors of nodes that have multiple colors.

### Documentation

#### General

* &#35;356 Added tutorial to integrate Ogma with Angular2.

