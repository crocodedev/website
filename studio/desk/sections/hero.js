import S from "@sanity/desk-tool/structure-builder";

export const hero = S.listItem().title("Hero").child(S.documentTypeList("hero"));
