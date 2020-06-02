package com.larablog.service;

import com.larablog.model.dto.MetaInfo;

import java.util.List;

public interface MetaService<META> {
    /**
     * name can be either category name or tag name
     * @param name
     * @return
     */
    Integer delete(String name);

    META save(String name);

    META update(Integer id,String name);

    boolean saveOrRemoveMetas(String name,Integer articleId);

    // TODO rename info should not be pluras
    List<MetaInfo> getFrontMetaInfos();

    List<MetaInfo> getAdminMetaInfos();

    List<META> findMetaByArticleId(Integer articleId);

}
