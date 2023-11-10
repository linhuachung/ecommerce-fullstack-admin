"use client";

import {Plus} from "lucide-react";
import {useParams, useRouter} from "next/navigation";

import {Button} from "@/components/ui/button";
import {Heading} from "@/components/ui/heading";
import React from "react";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";
import {ColorColumn, columns} from "@/app/(dashboard)/[storeId]/(routes)/colors/components/columns";

interface ColorClientProps {
    data: ColorColumn[]
}

export const ColorClient: React.FC<ColorClientProps> = ({data}) => {
    const params = useParams();
    const router = useRouter();
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Colors (${data.length})`} description="Manage colors for your store"/>
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4"/> Add New
                </Button>
            </div>
            <Separator/>
            <DataTable columns={columns} data={data} searchKey={"name"}/>
            <Heading title={"API"} description={"API calls for Colors"}/>
            <Separator/>
            <ApiList entityName="colors" entityIdName={"colorId"}/>
        </>
    );
};
