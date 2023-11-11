"use client";

import {Plus} from "lucide-react";
import {useParams, useRouter} from "next/navigation";

import {Button} from "@/components/ui/button";
import {Heading} from "@/components/ui/heading";
import React from "react";
import {columns, ProductColumn} from "@/app/(dashboard)/[storeId]/(routes)/products/components/columns";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";

interface ProductClientProps {
    data: ProductColumn[]
}

export const ProductsClient: React.FC<ProductClientProps> = ({data}) => {
    const params = useParams();
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Products (${data.length})`} description="Manage products for your store"/>
                <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
                    <Plus className="mr-2 h-4 w-4"/> Add New
                </Button>
            </div>
            <Separator/>
            <DataTable columns={columns} data={data} searchKey={"name"}/>
            <Heading title={"API"} description={"API calls for Products"}/>
            <Separator/>
            <ApiList entityName="products" entityIdName={"productId"}/>
        </>
    );
};
