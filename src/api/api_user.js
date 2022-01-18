import * as API from "./";
//import Url from './env.js'
export default {
  //登录
  login: (params) => {
    return API.POST("/api/login", params);
  },
  //获取菜单列表
  getmenulist: (params) => {
    return API.POST("/api/base/SysMenu/tree/selectAll", params);
  },
  //添加菜单列表
  addmenu: (params) => {
    return API.POST("/api/base/SysMenu/insert", params);
  },
  //删除菜单列表
  deletemenu: (params) => {
    return API.POST("/api/base/SysMenu/deleteById", params);
  },
  //查询角色列表
  getrolelist: (params) => {
    return API.POST("/api/base/SysRole/selectList", params);
  },
  //删除角色
  deleterole: (params) => {
    return API.POST("/api/base/SysRole/deleteById", params);
  },
  //添加角色
  addrole: (params) => {
    return API.POST("/api/base/SysRole/insert", params);
  },
  //添加角色
  editorrole: (params) => {
    return API.POST("/api/base/SysRole/updateById", params);
  },
  //给角色添加菜单
  roleaddmenu: (params) => {
    return API.POST("/api/base/RBAC/RolePermissionInsert", params);
  },
  //给角色删除菜单
  roledeletemenu: (params) => {
    return API.POST("/api/base/RBAC/RolePermissionDeleteById", params);
  },
  //查询角色对应的菜单
  rolegetmenu: (params) => {
    return API.POST("/api/base/RBAC/selectPermissionsByRoleId", params);
  },
  //初始化菜单
  getinitialmenu: (params) => {
    return API.POST("/api/base/RBAC/permissions", params);
  },
  //查询账号列表
  getuserlist: (params) => {
    return API.POST("/api/api_p/SysLogin/selectListByPageHelper", params);
  },

  //创建用户
  adduser: (params) => {
    return API.POST("/api/api_p/SysLogin/insert", params);
  },
  //修改用户
  editoruser: (params) => {
    return API.POST("/api/api_p/SysLogin/updateById", params);
  },
  //删除用户
  deleteuser: (params) => {
    return API.POST("/api/api_p/SysLogin/deleteById", params);
  },
  //菜单管理--查询个人
  personmenu: (params) => {
    return API.POST("/api/base/SysMenu/tree/selectRBAC", params);
  },
  //根据用户id查询用户角色接口
  getselectByLoginId: (params) => {
    return API.POST("/api/base/RBAC/selectByLoginId", params);
  },
  //msds数据
  getmsdslist: (params) => {
    return API.POST("/api/api/ReagentMsds/selectListByPageHelper", params);
  },
  //新增msds数据
  getaddmsdslist: (params) => {
    return API.POST("/api/api/ReagentMsds/insert", params);
  },
  //删除msds数据
  getdeletmsdslist: (params) => {
    return API.POST("/api/api/ReagentMsds/deleteById", params);
  },
  //获取一条msds数据
  getmsdsfirst: (params) => {
    return API.POST("/api/api/ReagentMsds/selectById", params);
  },
  //修改msds数据
  modifyonedata: (params) => {
    return API.POST("/api/api/ReagentMsds/updateById", params);
  },
  //给账号分配角色
  addignroles: (params) => {
    return API.POST("/api/base/RBAC/insert", params);
  },
  //给账号删除角色
  delignroles: (params) => {
    return API.POST("/api/base/RBAC/deleteById", params);
  },
  //获取审批单数据
  geteaxminlist: (params) => {
    return API.POST("/api/api/Order/selectListByPageHelper", params);
  },
  //危化品数据
  gethdchlist: (params) => {
    return API.POST("/api/api/Reagent/selectListByPageHelper", params);
  },
  //新增危化品数据
  addhdchlist: (params) => {
    return API.POST("/api/api/Reagent/insert", params);
  },
  //修改危化品数据
  updatahdchlist: (params) => {
    return API.POST("/api/api/Reagent/updateById", params);
  },
  //删除危化品数据
  deltahdchlist: (params) => {
    return API.POST("/api/api/Reagent/deleteById", params);
  },
  //打印接口
  getPrint: (params) => {
    return API.POST("/api/api/ReagentMsds/printRFID", params);
  },
  //修改菜单
  editmenu: (params) => {
    return API.POST("/api/base/SysMenu/updateById", params);
  },
  //获取epc数据
  getepclist: (params) => {
    return API.POST("/api/api/ReagentEpc/selectListByPageHelper", params);
  },
  //打印epc
  PrintEpc: (params) => {
    return API.POST("/api/api/ReagentMsds/printEpc", params);
  },
  //删除epc
  deleteEpc: (params) => {
    return API.POST("/api/api/ReagentEpc/deleteById", params);
  },
  //获取供应商数据
  getsupplier: (params) => {
    return API.POST("/api/api_p/Supplier/selectListByPageHelper", params);
  },
  //新增供应商数据
  addsupplier: (params) => {
    return API.POST("/api/api_p/Supplier/insert", params);
  },
  //修改供应商数据
  editsupplier: (params) => {
    return API.POST("/api/api_p/Supplier/updateById", params);
  },
  //删除供应商数据
  deletesupplier: (params) => {
    return API.POST("/api/api_p/Supplier/deleteById", params);
  },
  //获取仓库数据
  getwarehouse: (params) => {
    return API.POST("/api/api/WareHouse/selectListByPageHelper", params);
  },
  //添加仓库数据
  addwarehouse: (params) => {
    return API.POST("/api/api/WareHouse/insert", params);
  },
  //修改仓库数据
  editwarehouse: (params) => {
    return API.POST("/api/api/WareHouse/updateById", params);
  },
  //删除仓库数据
  deletewarehouse: (params) => {
    return API.POST("/api/api/WareHouse/deleteById", params);
  },
  //获取视频监控数据
  getvideolist: (params) => {
    return API.POST("/api/api/Video/selectListByPageHelper", params);
  },
  //新增视频监控数据
  addvideolist: (params) => {
    return API.POST("/api/api/Video/insert", params);
  },
  //修改视频监控数据
  editvideolist: (params) => {
    return API.POST("/api/api/Video/updateById", params);
  },
  //删除视频监控数据
  deletevideolist: (params) => {
    return API.POST("/api/api/Video/deleteById", params);
  },
  //获取仓库危化品汇总数据
  gethdcmmanages: (params) => {
    return API.POST("/api/api/ReagentStock/selectTotal", params);
  },
  //获取仓库危化品列表数据
  gethdcmmanage: (params) => {
    return API.POST("/api/api/ReagentStock/selectListByPageHelper", params);
  },
  //删除仓库危化品列表数据
  deletehdcmmanage: (params) => {
    return API.POST("/api/api/ReagentStock/destroy", params);
  },
  //追溯仓库危化品列表数据
  backhdcmmanage: (params) => {
    return API.POST("/api/api/ReagentRecord/selectListByPageHelper", params);
  },
  //获取所有仓库危化品列表数据
  gethdcmmanagesall: (params) => {
    return API.POST("/api/api/ReagentStock/selectAll", params);
  },
  //获取面部识别数据
  getfaceRecognition: (params) => {
    return API.POST("/api/api/DeviceFace/selectListByPageHelper", params);
  },
  //获取仓库所有数据
  getWareHouseAll: (params) => {
    return API.POST("/api/api/WareHouse/selectAll", params);
  },
  //新增面部识别数据
  addfaceRecognition: (params) => {
    return API.POST("/api/api/DeviceFace/insert", params);
  },
  //修改面部识别数据
  editfaceRecognition: (params) => {
    return API.POST("/api/api/DeviceFace/updateById", params);
  },
  //删除面部识别数据
  deletefaceRecognition: (params) => {
    return API.POST("/api/api/DeviceFace/deleteById", params);
  },
  //获取试剂类别数据
  getreagentcategory: (params) => {
    return API.POST("/api/api/ReagentType/selectListByPageHelper", params);
  },
  //添加试剂类别数据
  addreagentcategory: (params) => {
    return API.POST("/api/api/ReagentType/insert", params);
  },
  //修改试剂类别数据
  editreagentcategory: (params) => {
    return API.POST("/api/api/ReagentType/updateById", params);
  },
  //删除试剂类别数据
  deletereagentcategory: (params) => {
    return API.POST("/api/api/ReagentType/deleteById", params);
  },
  //获取试剂单位数据
  getreagentunit: (params) => {
    return API.POST("/api/api/ReagentUnit/selectListByPageHelper", params);
  },
  //新增试剂单位数据
  addreagentunit: (params) => {
    return API.POST("/api/api/ReagentUnit/insert", params);
  },
  //修改试剂单位数据
  editreagentunit: (params) => {
    return API.POST("/api/api/ReagentUnit/updateById", params);
  },
  //删除试剂单位数据
  deletereagentunit: (params) => {
    return API.POST("/api/api/ReagentUnit/deleteById", params);
  },
  //获取存储条件数据
  getstorageConditions: (params) => {
    return API.POST("/api/api/ReagentStorage/selectListByPageHelper", params);
  },
  //新增存储条件数据
  addstorageConditions: (params) => {
    return API.POST("/api/api/ReagentStorage/insert", params);
  },
  //修改存储条件数据
  editstorageConditions: (params) => {
    return API.POST("/api/api/ReagentStorage/updateById", params);
  },
  //删除存储条件数据
  deletestorageConditions: (params) => {
    return API.POST("/api/api/ReagentStorage/deleteById", params);
  },
  //获取io模块数据
  getioList: (params) => {
    return API.POST("/api/api/DeviceIo/selectListByPageHelper", params);
  },
  //新增io模块数据
  addioList: (params) => {
    return API.POST("/api/api/DeviceIo/insert", params);
  },
  //修改io模块数据
  editioList: (params) => {
    return API.POST("/api/api/DeviceIo/updateById", params);
  },
  //删除io模块数据
  deleteioList: (params) => {
    return API.POST("/api/api/DeviceIo/deleteById", params);
  },
  //获取房间数据
  gethouseList: (params) => {
    return API.POST("/api/api/Room/selectListByPageHelper", params);
  },
  //添加房间数据
  addhouseList: (params) => {
    return API.POST("/api/api/Room/insert", params);
  },
  //修改房间数据
  edithouseList: (params) => {
    return API.POST("/api/api/Room/updateById", params);
  },
  //删除房间数据
  deletehouseList: (params) => {
    return API.POST("/api/api/Room/deleteById", params);
  },
  //根据所属库获取房间数据
  getAlonehouseList: (params) => {
    return API.POST("/api/api/Room/selectAll", params);
  },
  //结算
  getsettlement: (params) => {
    return API.POST("/api/api_p/settlement", params);
  },
  //获取语音播报数据
  getvoice: (params) => {
    return API.POST("/api/api/DeviceVoice/selectListByPageHelper", params);
  },
  //新增语音播报数据
  addvoice: (params) => {
    return API.POST("/api/api/DeviceVoice/insert", params);
  },
  //修改语音播报数据
  editvoice: (params) => {
    return API.POST("/api/api/DeviceVoice/updateById", params);
  },
  //删除语音播报数据
  deletevoice: (params) => {
    return API.POST("/api/api/DeviceVoice/deleteById", params);
  },
  //获取检测通道数据
  getrfid: (params) => {
    return API.POST("/api/api/DeviceMachine/selectListByPageHelper", params);
  },
  //新增检测通道数据
  addrfid: (params) => {
    return API.POST("/api/api/DeviceMachine/insert", params);
  },
  //修改检测通道数据
  editrfid: (params) => {
    return API.POST("/api/api/DeviceMachine/updateById", params);
  },
  //删除检测通道数据
  deleterfid: (params) => {
    return API.POST("/api/api/DeviceMachine/deleteById", params);
  },
  //获取试剂摆放接口
  getarea: (params) => {
    return API.POST("/api/api/ReagentArea/selectListByPageHelper", params);
  },
  //新增试剂摆放接口
  addarea: (params) => {
    return API.POST("/api/api/ReagentArea/insert", params);
  },
  //修改试剂摆放接口
  editarea: (params) => {
    return API.POST("/api/api/ReagentArea/updateById", params);
  },
  //删除试剂摆放接口
  deletearea: (params) => {
    return API.POST("/api/api/ReagentArea/deleteById", params);
  },
  //查询可入库试剂
  selectNoWarehouse: (params) => {
    return API.POST("/api/api/ReagentEpc/selectNoWarehouse", params);
  },
  //手动入库
  enterWarehouse: (params) => {
    return API.POST("/api/api/ReagentStock/enterWarehouse", params);
  },
  //获取过期预警数据
  getExpireWarning: (params) => {
    return API.POST("/api/api/ReagentStock/getExpireWarning", params);
  },
  //删除过期预警数据
  deleteExpireWarning: (params) => {
    return API.POST("/api/api/ReagentStock/deleteExpire", params);
  },
  //入库管理中入库功能接口
  Warehousing: (params) => {
    return API.POST("/api/api_p/rkOpenTheDoor", params);
  },
  //获取多个试剂摆放区接口
  getareaAll: (params) => {
    return API.POST("/api/api/ReagentArea/selectAll", params);
  },
  //手动出库
  Exwarehouse: (params) => {
    return API.POST("/api/api/ReagentStock/outWarehouse", params);
  },
  //查询扫描数据
  scanningList: (params) => {
    return API.POST("/api/api_p/getRfidData", params);
  },
  //获取中控台数据
  getconsoleList: (params) => {
    return API.POST("/api/api/DeviceConsole/selectListByPageHelper", params);
  },
  //新增中控台数据
  addconsoleList: (params) => {
    return API.POST("/api/api/DeviceConsole/insert", params);
  },
  //修改中控台数据
  editconsoleList: (params) => {
    return API.POST("/api/api/DeviceConsole/updateById", params);
  },
  //删除中控台数据
  deleteconsoleList: (params) => {
    return API.POST("/api/api/DeviceConsole/deleteById", params);
  },
  //获取称重模块数据
  getweight: (params) => {
    return API.POST("/api/api/DeviceWeigh/selectListByPageHelper", params);
  },
  //新增称重模块数据
  addweight: (params) => {
    return API.POST("/api/api/DeviceWeigh/insert", params);
  },
  //修改称重模块数据
  editweight: (params) => {
    return API.POST("/api/api/DeviceWeigh/updateById", params);
  },
  //删除称重模块数据
  deleteweight: (params) => {
    return API.POST("/api/api/DeviceWeigh/deleteById", params);
  },
  //获取试剂销毁记录
  getReagentdestruction: (params) => {
    return API.POST("/api/api/DestroyLog/selectListByPageHelper", params);
  },
  //获取刷脸记录
  getfacelog: (params) => {
    return API.POST("/api/api/FaceLog/selectFaceLog ", params);
  },
  //获取操作列表数据
  getoperationdata: (params) => {
    return API.POST("/api/api_p/getRfidData ", params);
  },
  // //库存试剂导出
  // stockreagentexport: (params) => {
  //   return API.GET("/api/api/ReagentStock/export ", params);
  // },
  //获取监控记录记录分页数据
  getmonitor: (params) => {
    return API.POST("/api/api/VideoMonitor/selectListByPageHelper ", params);
  },
  //删除监控记录记录分页数据
  deletemonitor: (params) => {
    return API.POST("/api/api/VideoMonitor/deleteById ", params);
  },
  //获取所有监控记录记录数据
  getmonitorall: (params) => {
    return API.POST("/api/api/VideoMonitor/selectAll ", params);
  },
  //获取二维码扫描器分页数据
  getQRcode: (params) => {
    return API.POST("/api/api/DeviceQr/selectListByPageHelper", params);
  },
  //新增二维码扫描器分页数据
  addQRcode: (params) => {
    return API.POST("/api/api/DeviceQr/insert", params);
  },
  //修改二维码扫描器分页数据
  editQRcode: (params) => {
    return API.POST("/api/api/DeviceQr/updateById", params);
  },
  //获取二维码扫描器分页数据
  deleteQRcode: (params) => {
    return API.POST("/api/api/DeviceQr/deleteById", params);
  },
  //获取一体机数据
  getYTJ: (params) => {
    return API.POST("/api/api_p/getAllData", params);
  },
  //称重
  weigh: (params) => {
    return API.POST("/api/api_p/weighForMix", params);
  },
  //倒取接口
  Reverseextraction: (params) => {
    return API.POST("/api/api_p/setUseInRoom", params);
  },
  //出库接口
  Outwarehouse: (params) => {
    return API.POST("/api/api_p/ckCloseTheDoor", params);
  },
  //获取空气质量分页数据
  getairquality: (params) => {
    return API.POST("/api/api/AirLog/selectListByPageHelper", params);
  },
  //新增空气质量分页数据
  addairquality: (params) => {
    return API.POST("/api/api/AirLog/insert", params);
  },
  //修改空气质量分页数据
  editairquality: (params) => {
    return API.POST("/api/api/AirLog/updateById", params);
  },
  //删除空气质量分页数据
  deleteairquality: (params) => {
    return API.POST("/api/api/AirLog/deleteById", params);
  },
  //查轨迹列表
  postimg: (params) => {
    return API.POST("/api/api_p/DeviceFace/matchFaceFromJS", params);
  },
};
