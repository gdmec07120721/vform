/*created by xaobi*/

const Form = {};

Form.install = (Vue, options = {}) => {
    //自定义指令实现
    Vue.directive('form', {
        bind: function (el, binding, vnode) {
            let ele_inputs = [], //input输入框集合
                ele_sub_btn = null; //提交按钮

            //判断是否有传入的参数
            if (binding.expression) {
                ele_sub_btn = getAttrChildNode(el.childNodes, binding.value.sub_key);
            } else {
                ele_sub_btn = getAttrChildNode(el.childNodes, 'data-form-type');
            }

            ele_inputs = getChildNode(el.childNodes, 'INPUT');

            addEventKeydown(ele_inputs, ele_sub_btn);
        }
    });
};

function addEventKeydown(ele_inputs, ele_sub_btn) {
    //监听键盘事件
    document.addEventListener('keydown', () => {
        // 兼容FF和IE和Opera
        let theEvent = window.event || e;
        let code = theEvent.keyCode || theEvent.which || theEvent.charCode;

        //enter按钮
        if (code == 13) {
            //获取当前活动的元素
            let active_ele = document.activeElement;

            for (let i = 0; i < ele_inputs.length; i++) {
                //判断当前活动的元素是否是input输入框集合里的元素
                if (ele_inputs[i] == active_ele) {
                    //并且获取当前活动的元素在集合里的下标，判断是否非最后一个输入框
                    if (i < (ele_inputs.length - 1)) {
                        //下一个input聚焦
                        ele_inputs[i + 1].focus();
                        break;
                    } else if (i == (ele_inputs.length - 1) && ele_sub_btn) {
                        //提交按钮聚焦
                        ele_sub_btn.focus();
                    }
                }
            }
        }
    });
}

/*
 * 获取指定node名称的子元素
 * @prama {Array}  child_nodes 子元素集合
 * @prama {String} node_name   指定子元素的node名称
 *
*/
function getChildNode(child_nodes, node_name) {
    let nodes = [], 
        new_child_nodes = [];

    child_nodes.forEach(ele => {
        //判断子元素是不是非文本
        if (ele.nodeName != '#text') {
            if (ele.nodeName == node_name && ele.getAttribute('disabled') != 'disabled') {
                nodes.push(ele);
            }

            if (ele.childNodes.length > 0) {
                new_child_nodes = getChildNode(ele.childNodes, node_name);
                nodes = [...nodes, ...new_child_nodes];
            }
        }
    })

    return nodes;
}

/*
 * 获取指定属性名称的子元素
 * @prama {Array}  child_nodes 子元素集合
 * @prama {String} attr_key    指定子元素的属性键值
 *
*/
function getAttrChildNode(child_nodes, attr_key) {
    let node = '';

    child_nodes.forEach(ele => {
        //判断子元素是不是非文本
        if (ele.nodeName != '#text') {
            //获取指定属性名称的值
            let new_attr_name = ele.getAttribute(attr_key);

            //判断指定属性名称的值是否存在
            if (new_attr_name) {
                node = ele;
            } else { //不存在
                //判断是否有子元素，有则递归循环，获取指定属性名称子元素
                if (ele.childNodes.length > 0 && getAttrChildNode(ele.childNodes, attr_key)) {
                   node = getAttrChildNode(ele.childNodes, attr_key);
                }
            }
        }
    })

    return node;
}

export default Form;