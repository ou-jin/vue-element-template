<template>
  <div style="background: #ffffff;margin-bottom:5px;" v-bind="$attrs">
    <div style="padding-left:20px">
    <CommonForm
      v-on="$listeners"
      v-bind="$attrs"
      :opt="obj.tableSearch"
      v-if="obj.tableSearch.formPage.length>0||obj.tableSearch.editOpt.length>0"
    ></CommonForm>
    </div>
    <el-table
       ref="commonTable"
      :data="formatData"
      highlight-current-row
      stripe
      border
      :max-height="obj.height"
      @row-click="(i)=>{$emit(obj.itemFcn?obj.itemFcn:'select',i)}"
      @selection-change="check"
      style="width: 100%"
      :header-cell-class-name="()=>{return 'nowrap'}"
      :row-style="showRow"
    >
    <!-- 表格 check 栏 -->
      <el-table-column
        type="selection"
        width="55"
        v-if="obj.check"
        header-align="center"
        align="center"
      ></el-table-column>
      <el-table-column
        v-for="(item,index) in obj.table"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        header-align="center"
        align="center"
        :sortable="item.sort"
        :fixed="item.fixed"
        :width="item.width"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <span v-if="index === 0">
            <span v-for="space in scope.row._level" :key="space" class="ms-tree-space"/>
          </span>
          <span
            v-if="iconShow(index,scope.row)"
            class="tree-ctrl"
            @click="toggleExpanded(scope.$index)"
          >
            <i v-if="!scope.row._expanded" class="el-icon-plus"/>
            <i v-else class="el-icon-minus"/>
          </span>
          {{ scope.row[item.prop]}}
        </template>
      </el-table-column>
      <!-- 操作栏 -->
      <el-table-column
        fixed="right"
        label="操作"
        v-if="obj.edit"
        align="center"
        :width="obj.editOpt.width"
      >
        <template slot-scope="scope">
          <span style="margin-right:5px" v-for="(item,i) in obj.editOpt.list" :key="i">
            <el-button
              v-if="item.type!=='switch'"
              size="mini"
              :type="item.type"
              @click="$emit(item.fcn,scope.$index)"
            >{{item.text}}</el-button>
            <el-switch
              v-if="item.type==='switch'"
              @change="$emit(item.fcn,scope.row)"
              :active-text="item.active"
              :inactive-text="item.inactive"
              v-model="scope.row[item.data]"
            ></el-switch>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination row-center" v-if="obj.pagination">
      <el-pagination
        @size-change="(s)=>{$emit('sizeChange',s)}"
        @current-change="(s)=>{$emit('currentChange',s)}"
        @prev-click="(s)=>$emit('prevPage',s)"
        @next-click="(s)=>$emit('nextPage',s)"
        :current-page="obj.paginationOpt.currentPage"
        :page-size="obj.paginationOpt.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="obj.paginationOpt.totalRecords"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import treeToArray from "../../common/utils/eval";
export default {
  inheritAttrs: false,
  created() {
  },
  props: {
    opt: {
      type: Object,
      default: () => ({})
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    add() {
      this.$emit("add");
    },
    search() {
      this.$emit("search", this.obj.tableSearch);
    },
    select(i) {
      this.$emit("select", i);
    },
    check(val) {
      this.$emit("check", val);
    },
    // treetable methods
    showRow: function(row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true;
      row.row._show = show;
      return show
        ? "animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;"
        : "display:none;";
    },
    // 切换下级是否展开
    toggleExpanded: function(trIndex) {
      const record = this.formatData[trIndex];
      record._expanded = !record._expanded;
    },
    // 图标显示
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0;
    }
  },
  computed: {
    obj() {
      // 将父组件的数据过渡到子组件
      return Object.assign({}, this.opt);
    },
    // 格式化数据源
    formatData: function() {
      let tmp;
      if (!Array.isArray(this.obj.tableData)) {
        tmp = [this.obj.tableData];
      } else {
        tmp = this.obj.tableData;
      }
      const func = this.evalFunc || treeToArray;
      const args = this.evalArgs
        ? Array.concat([tmp, this.expandAll], this.evalArgs)
        : [tmp, this.expandAll];
      return func.apply(null, args);
    }
  }
};
</script>

<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}CommonTable
.text_style_1 {
  font-size: 14px;
  color: rgba(99, 98, 98, 0.952);
}
.banner {
  width: 120px;
  margin-left: 5px;
}
/* 重写cell属性，解决表头内容过多不换行的问题 */
.el-table .cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 18px;
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: $space-width;
  height: 14px;
  &::before {
    content: "";
  }
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>

