<template>
    <el-container style="height: 100%">
        <el-aside :width="sideWidth + 'px'"
            style="overflow: hidden; background-color: rgb(238, 241, 246); box-shadow: 2px 0 6px rgb(0, 21, 41, 0.35);">
            <el-menu :default-openeds="['1', '3']" style="height: 100%; overflow-x: hidden;"
                background-color="rgb(48,65,86)" text-color="#fff" active-text-color="#ffd04b"
                :collapse-transition="false" :collapse="isCollapse">
                <div style="height: 60px; line-height: 60px; text-align: center; ">
                    <img src="../../assets/logo.png" alt=""
                        style="width: 20px; position: relative; top: 5px; margin-right: 5px;">
                    <b style="color: white;" v-show="logoTextShow">后台管理系统</b>
                </div>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i><span>导航一</span></template>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i><span>导航二</span></template>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i><span>导航三</span></template>
                    <el-submenu index="3-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container style="height: 100%">
            <el-header style="font-size: 12px; display:flex">
                <div style="flex:1;font-size: 20px">
                    <span :class="collapseBtnClass" style="cursor: pointer;" @click="collapse"></span>
                </div>
                <el-dropdown style="width: 70px; cursor: pointer;">
                    <span>董 佳</span>
                    <i class="el-icon-arrow-down" style="margin-left: 5px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>退出系统</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </el-header>

            <el-scrollbar>
                <el-main style="height: 100%;">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="mg10">
                        <el-input style="width:200px" suffix-icon="el-icon-search" placeholder="请输入名称"></el-input>
                        <el-input style="width:200px" suffix-icon="el-icon-message" placeholder="请输入邮箱" class="ml5">
                        </el-input>
                        <el-input style="width:200px" suffix-icon="el-icon-position" placeholder="请输入地址" class="ml5">
                        </el-input>
                        <el-button class="ml5" type="primary">搜索</el-button>
                    </div>

                    <div class="mg10">
                        <el-button type="primary">新增 <i class="el-icon-circle-plus-outline"></i></el-button>
                        <el-button type="danger">批量删除 <i class="el-icon-remove-outline"></i></el-button>
                        <el-button type="primary">导入 <i class="el-icon-upload2"></i></el-button>
                        <el-button type="primary">导出 <i class="el-icon-download"></i></el-button>
                    </div>

                    <el-table :data="tableData" stripe border :header-cell-class-name="headerBg">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                        <el-table-column>
                            <template slot-scope="scope">
                                <el-button type="success" plain>编辑 <i class="el-icon-edit"></i></el-button>
                                <el-button type="danger" plain>删除 <i class="el-icon-remove-outline"></i></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="mg10">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper" :total="400">
                        </el-pagination>
                    </div>
                </el-main>
            </el-scrollbar>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: "Home",
    data() {
        const item = {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
        };
        return {
            tableData: Array(8).fill(item),
            collapseBtnClass: 'el-icon-s-fold',
            isCollapse: false,
            sideWidth: 200,
            logoTextShow: true,
            headerBg: 'headerBg'
        };
    },
    methods: {
        collapse() {
            this.isCollapse = !this.isCollapse;
            if (this.isCollapse) {
                this.sideWidth = 64;
                this.collapseBtnClass = 'el-icon-s-unfold';
                this.logoTextShow = false;
            } else {
                this.sideWidth = 200;
                this.collapseBtnClass = 'el-icon-s-fold';
                this.logoTextShow = true;
            }
        }
    },
};
</script>

<style scoped>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}

::-webkit-scrollbar {
    display: none !important;
}

/deep/ .headerBg {
    background: #ccc !important;
}
</style>