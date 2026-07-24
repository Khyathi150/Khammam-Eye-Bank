from datetime import datetime

from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=20)
    subject: str = Field(min_length=1, max_length=200)
    message: str = Field(min_length=1)


class ContactResponse(BaseModel):
    success: bool
    id: int


class PledgeCreate(BaseModel):
    full_name: str = Field(min_length=1, max_length=120)
    date_of_birth: str | None = None
    gender: str | None = None
    mobile_number: str = Field(min_length=6, max_length=20)
    email: EmailStr | None = None
    address: str
    district: str | None = None
    state: str | None = None
    next_of_kin_name: str | None = None
    next_of_kin_relationship: str | None = None
    next_of_kin_contact: str | None = None


class PledgeResponse(BaseModel):
    success: bool
    id: int


class NewsOut(BaseModel):
    id: int
    title: str
    summary: str
    published_at: datetime

    model_config = {"from_attributes": True}


class PartnerOut(BaseModel):
    id: int
    name: str
    category: str

    model_config = {"from_attributes": True}
