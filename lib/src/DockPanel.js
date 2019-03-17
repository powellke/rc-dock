"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DockTabs_1 = require("./DockTabs");
class DockPanel extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = { dropping: null };
        this.onDragOver = () => {
            DockPanel.droppingPanel = this;
            this.setState({ dropping: null });
        };
    }
    static set droppingPanel(panel) {
        if (DockPanel._droppingPanel === panel) {
            return;
        }
        if (DockPanel._droppingPanel) {
            DockPanel._droppingPanel.onDragLeave();
        }
    }
    onDragLeave() {
        this.setState({ dropping: null });
    }
    render() {
        let { dropping } = this.state;
        let { panelData, size } = this.props;
        let { minWidth, minHeight, group, id } = panelData;
        let { panelClass } = group;
        let cls = `dock-panel ${panelClass ? panelClass : ''} ${dropping ? 'dock-panel-dropping' : ''}`;
        let style = { minWidth, minHeight, flex: `1 1 ${size}px` };
        if (panelData.parent.mode === 'float') {
            style.left = panelData.x;
            style.top = panelData.y;
            style.width = panelData.w;
            style.height = panelData.h;
        }
        let droppingLayer;
        if (dropping) {
        }
        return (react_1.default.createElement("div", { className: cls, style: style, "data-dockid": id, onDragOver: this.onDragOver },
            react_1.default.createElement(DockTabs_1.DockTabs, { panelData: panelData })));
    }
}
exports.DockPanel = DockPanel;
//# sourceMappingURL=DockPanel.js.map