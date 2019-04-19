<template>
  <div>
    <el-card>
      <el-form :inline="true" class="row-flex-start">
        <el-form-item label="高亮">
          <div contenteditable="true" class="edit_div" id='edit_div'  placeholder="高亮" @keyup="input"></div>
           <!-- <el-input v-model="str"  placeholder="高亮" @input="input"></el-input>  -->
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  created() {},
  watch:{
    str(n,o){
      console.log(n)
      n = n.replace(new RegExp("(" + '123' + ")", "g"),"<font color=red>$1</font>")
    }
  },
  data() {
    return {
      saveStr: "",
      str: "21323412",
      keyWord:'123'
    };
  },
  methods: {
    getC(that){
			if(document.all){
				that.range=document.selection.createRange();
				that.range.select();
				that.range.moveStart("character",-1); 
			}else{
				that.range=window.getSelection().getRangeAt(0);
				that.range.setStart(that.range.startContainer,2);
			}
	},
    input(s) {
      let node = document.getElementById('edit_div')
     let str = node.innerHTML
     node.innerHTML=(str.replace('222','<p color=red>222</p>'))
      // console.log(document.getElementById('edit_div').innerHTML)
    }
  },
  computed:{

  }
};
</script>
<style lang="scss">
.edit_div{
  height: 30px;
  width: 200px;
  border: 1px gray solid;
  border-radius: 20px; 
}
.index-wrapper {
  height: 100%;
}
.index-wrapper .el-header {
  padding: 0;
}
.index-wrapper .main-container {
  height: 100%;
}
</style>